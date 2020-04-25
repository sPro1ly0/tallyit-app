import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faDice,
  faDiceOne, 
  faPencilAlt, 
  faUsers, 
  faPlusCircle, 
  faListAlt, 
  faCheckCircle, 
  faCheck, 
  faTrash 
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(
    faDice,
    faDiceOne,
    faPencilAlt, 
    faUsers, 
    faListAlt, 
    faPlusCircle,
    faCheckCircle,
    faCheck,
    faTrash
  );
}
