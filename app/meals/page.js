import Link from "next/link";
import { Suspense } from "react";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
export const metadata = {
  title: "All Meals",
  description:
    "Browse all your favroit meals shareb by your vibrant community.",
};

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meal, Created
          <span className={classes.highlight}>by You</span>
        </h1>
        <p>
          Choose your favorite recipes and cook it yourself. Its easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
