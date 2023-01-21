import HText from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui perferendis optio architecto aut? Sequi alias, quidem a nulla officiis reprehenderit aliquid cupiditate, harum eum libero, nemo cum asperiores tempore.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui perferendis optio architecto aut? Sequi alias, quidem a nulla officiis reprehenderit aliquid cupiditate, harum eum libero, nemo cum asperiores tempore.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui perferendis optio architecto aut? Sequi alias, quidem a nulla officiis reprehenderit aliquid cupiditate, harum eum libero, nemo cum asperiores tempore.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui perferendis optio architecto aut? Sequi alias, quidem a nulla officiis reprehenderit aliquid cupiditate, harum eum libero, nemo cum asperiores tempore.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui perferendis optio architecto aut? Sequi alias, quidem a nulla officiis reprehenderit aliquid cupiditate, harum eum libero, nemo cum asperiores tempore.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima qui perferendis optio architecto aut? Sequi alias, quidem a nulla officiis reprehenderit aliquid cupiditate, harum eum libero, nemo cum asperiores tempore.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="min-h-height w-full py-20 bg-primary-100">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              qui, architecto quasi sequi doloremque voluptas, ratione quaerat
              enim temporibus nemo mollitia laudantium tempora vitae
              consectetur, et ipsam. Nemo, ab deleniti?
            </p>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item,index)=>{
                return(
                    <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
