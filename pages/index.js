import Head from 'next/head';
import { useState, useEffect} from 'react';
import * as Realm from "realm-web";
import Category from '../components/Category';
import Container from '../components/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';


export default function Home() {
  const [recipes, setRecipes] = useState([])
  useEffect(async () => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allRecipes = await user.functions.getAllRecipes();
      setRecipes(allRecipes);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Рецепты</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full min-h-screen">
      <Header />
      <Container>
        <Hero />
        <Category
        category="Рецепты"
        categoryCount={`${recipes.length} Рецептов`} 
        />

        <Recipes recipes={recipes} />

        <Pagination />

      </Container>
      <Footer />
      </div>

    </div>
  )
}
