import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="h-1/3 w-full px-8 py-16  bg-stone-900 text-stone-50 rounded-xl sm:w-1/3 sm:h-screen md:w-72 ">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}> +Add Button</Button>
      </div>
    </aside>
  );
}
