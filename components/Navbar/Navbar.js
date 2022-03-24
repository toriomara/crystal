import NextLink from "next/link";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Link,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
  Spacer,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import ThemeToggleButton from "../ui/theme-toggle-button";
import SearchBar from "../Search";
import Logo from "../ui/Logo";
import Navi from "./Navi";
import { Lang } from "./Lang";

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref>
      <Link
        p={3}
        fontSize={16}
        whiteSpace="nowrap"
        color={useColorModeValue(
          active ? "brand.50" : "black",
          active ? "brand.50" : "gray.200"
        )}
        _hover={{
          textDecoration: "none",
          color: "red.600",
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const Navbar = (props) => {
  const { path } = props;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box
        //top="100px"
        position="fixed"
        as="nav"
        w="100%"
        justify="center"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={1}
        {...props}
      >
        <Container
          flexDirection="row"
          alignItems="center"
          maxW="8xl"
          wrap="nowrap"
          p={2}
          px={{
            base: "4",
            md: "4",
          }}
        >
          <Flex minHeight="80px">
            <HStack>
              <Logo />
            </HStack>
            <Spacer />
            <DesktopNav href path={path} />
            <Spacer />
            <HStack display={{ base: "sm", md: "flex" }}>
              <SearchBar display={{ base: "sm", md: "flex" }} />
              <Button as="a" href="tel:+78002347878" variant="none">
                <span>8 800 234-78-78</span>
              </Button>
              <Lang />
              <ThemeToggleButton />
              <IconButton
                display={{ base: "inline-block", xl: "none" }}
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </HStack>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Container>
      </Box>
      {/* <Navi /> */}
    </>
  );
};

const DesktopNav = ({ href, path, ...props }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <HStack
      direction={{ base: "column", md: "row" }}
      display={{ base: "none", xl: "flex" }}
      width={{ base: "full", md: "auto" }}
      mt={{ base: 4, md: 0 }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <LinkItem href={navItem.href} path={path}>
                {navItem.label}
              </LinkItem>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopChildNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </HStack>
  );
};

const DesktopChildNav = ({ label, href, childLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "brand.50" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{childLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"brand.50"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Продукция",
    href: "/КОРУНД-Классик",
    children: [
      {
        label: "КОРУНД-Классик",
        childLabel: "Для крыши, стен, пола, фасада",
        href: "/КОРУНД-Классик",
      },
      {
        label: "КОРУНД-Фасад",
        childLabel: "Устраняет промерзания",
        href: "/КОРУНД-Фасад",
      },
      {
        label: "КОРУНД-Антикор",
        childLabel: "Для металлически поверхностей",
        href: "/КОРУНД-Антикор",
      },
      {
        label: "КОРУНД-Зима",
        childLabel: "Для применения в зимой",
        href: "/КОРУНД-Зима",
      },
    ],
  },
  {
    label: "Документация",
    href: "/documentation",
    children: [
      {
        label: "Техническая документация",
        childLabel: "Характеристика, презентации и пр.",
        href: "/documentation",
      },
      {
        label: "Уставные документы",
        childLabel: "Устав, лицензия, патенты и пр.",
        href: "/documentation",
      },
    ],
  },
  {
    label: "Новости",
    href: "/news",
  },
  {
    label: "Дистрибьюция",
    href: "/distribution",
  },
  {
    label: "О нас",
    href: "/about",
  },
  {
    label: "Контакты",
    href: "/contacts",
  },
];
