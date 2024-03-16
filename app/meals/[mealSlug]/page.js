export default function SomeSlug({ params }) {
  return (
    <main>
      <h1 style={{ color: "red", textAlign: "center" }}> Some Slug</h1>
      <h2 style={{ color: "red", textAlign: "center" }}>{params.mealSlug}</h2>
    </main>
  );
}
