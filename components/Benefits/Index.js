import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import {
  FcClock,
  FcDisclaimer,
  FcBiomass,
  FcRules,
  FcFlashOff,
  FcDam,
} from "react-icons/fc";
import { Feature } from "./Feature";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

export const Benefits = () => {
  return (
    <Box >
      <MotionHeading
        py="4"
        display="flex"
        justifyContent="center"
        fontWeight={500}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
        lineHeight="110%"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        Преимущества
      </MotionHeading>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          xl: 3,
        }}
        spacingX="10"
        spacingY={{
          base: "8",
          md: "14",
        }}
      >
        <Feature title="Экологичность" icon={<FcBiomass />}>
          Материал полностью безопасен и имеет экомаркировку
        </Feature>
        <Feature title="Простота применения" icon={<FcRules />}>
          Наносится как краска: работа с материалом не требует специальных
          навыков
        </Feature>
        <Feature title="Долговечность" icon={<FcClock />}>
          Срок службы более 15 лет
        </Feature>
        <Feature title="Отпугивает вредителей" icon={<FcDisclaimer />}>
          Отпугивает насекомых и грызунов
        </Feature>
        <Feature title="Диэлектрик" icon={<FcFlashOff />}>
          Препятствует горению
        </Feature>
        <Feature title="Защита от конденсата" icon={<FcDam />}>
          Высокая паропроницаемость материала и, как следствие, защита от грибка
          и плесени
        </Feature>
      </SimpleGrid>
    </Box>
  );
};
