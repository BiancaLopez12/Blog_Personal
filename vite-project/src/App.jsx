import Footer from "./components/Footer"; // Asegúrate de que Footer sea importado correctamente
import "./App.css";
import { useEffect, useState } from "react";
import supabase from "../lib/helper/supabaseClient";
import Header from "./components/Header";
import Post from "./components/Post";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);
    const {
      data: { subcription },
    } = dupabase.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
          console.log("caso no estimado");
      }
    });
    return () => {
      subcription.unsubscribe;
    };
  }, []);
  const handleLogin = async () => {
    //Pide el singInWithOAuth y despues destructuramos solamente el error
    await supabase.auth.signInWithOAuth({
      provider: "github", //establece a github para vincuar
    });
  };

  const handleLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>Iniciar sesión con Github</button>
      <h2>𝓤𝓷 𝓹𝓸𝓺𝓾𝓲𝓽𝓸 𝓭𝓮 𝓵𝓸 𝓺𝓾𝓮 𝓯𝓾𝓮 𝓢𝓲𝓮𝓻𝓻𝓪 𝓭𝓮 𝓵𝓪 𝓥𝓮𝓷𝓽𝓪𝓷𝓪</h2>
      <Post
        titulo={" 𝐕𝐢𝐬𝐢𝐭𝐚𝐧𝐝𝐨 𝐞𝐥 𝐂𝐞𝐧𝐭𝐫𝐨 "}
        description={"Sierra De La Ventana"}
        link={"/fotogeneral.jpg"}
        parrafo={"Sierra De La Ventana 2024"}
      />
      <Post
        titulo={"𝐒𝐞𝐫𝐫𝐨 𝐞𝐧 𝐁𝐞𝐧𝐣𝐚𝐦𝐢𝐧"}
        description={"Sierra De La Ventana"}
        link={"/fotochicos.jpg"}
        parrafo={"Sierra De La Ventana 2024"}
      />
      <Post
        titulo={"𝐀𝐫𝐛𝐨𝐥 𝐩𝐥𝐚𝐧𝐭𝐚𝐝𝐨 𝐩𝐨𝐫 𝐧𝐨𝐬𝐨𝐭𝐫𝐨𝐬, 𝐞𝐥 𝐑𝐨𝐛𝐞𝐫𝐭"}
        description={"Sierra De La Ventana"}
        link={"/arbol.jpg"}
        parrafo={"Sierra De La Ventana 2024"}
      />

      <Footer />
    </>
  );
}
