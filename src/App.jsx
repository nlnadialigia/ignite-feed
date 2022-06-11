import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <div>
      <Post
        author="Nádia Ligia"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum eos id ex aut, ratione quos officia natus corrupti, saepe perferendis sint? Voluptatum, ipsam? Ratione sint nemo laborum aperiam expedita"
      />
      <Post
        author="Joana D'arc"
        content="Nulla quis lorem ut libero malesuada feugiat."
      />
    </div>
  );
}
