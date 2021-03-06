import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import RecipeDetail from "../../components/RecipeDetail";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState();
  const { query } = useRouter();

  useEffect(async () => {
    // add your Realm App Id to the .env.local file
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const oneRecipe = await user.functions.getOneRecipe(query.id);
      setRecipe(() => oneRecipe);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      {recipe && (
        <>
          <Head>
            <title>Давайте Хорошо Приготовим - {recipe.name}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-white w-full min-h-screen">
            <Header />
            <Container>
              <RecipeDetail recipe={recipe} />
            </Container>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default RecipeDetails;