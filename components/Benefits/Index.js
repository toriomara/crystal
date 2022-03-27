import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import * as React from "react";
import {
  FcClock,
  FcDisclaimer,
  FcBiomass,
  FcRules,
  FcFlashOff,
  FcDam,
} from "react-icons/fc";
import { Feature } from "./Feature";

export const Benefits = () => (
  <Box
    as="section"
    mx="auto"
    py="12"
    px={{
      base: "6",
      md: "8",
    }}
  >
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
        Наносится как краска: работа с материалом не требует специальных навыков
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
        Высокая паропроницаемость материала и, как следствие, защита от грибка и
        плесени
      </Feature>
    </SimpleGrid>
  </Box>
);
