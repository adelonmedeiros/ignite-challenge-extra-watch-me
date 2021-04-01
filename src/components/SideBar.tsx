import { Button } from "./Button";

interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

// Interface criada para o desafio
interface SidebarProps {
  genres: Genre[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}: SidebarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
