import Image from "next/image";
import NikeImg from "../../public/images/NikeCover.jpg";
import classes from "./NikeCover.module.css";
function NikeCover() {
  return (
    <div className={classes.cover}>
      <Image
        src={NikeImg}
        alt="Nike Cover"
        className={classes.img}
        fill
        priority
      />
      <div className={classes.overlay}></div>
    </div>
  );
}

export default NikeCover;
