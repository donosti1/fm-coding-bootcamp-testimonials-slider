import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      500: "hsl(240, 38%, 20%)",
      600: "hsl(240, 18%, 77%)",
    },
  },
  sizes: {
    container: {
      md: "660px",
      xl: "1440px",
    },
  },
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  fontSizes: {
    "2xl": "1.6rem",
  },
  components: {
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
        color: ({colorScheme = "secondary"}) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Radio: {
      sizes: {
        xl: {
          control: {w: {base: 6, lg: 5}, h: {base: 6, lg: 5}},
          label: {fontSize: "lg"},
        },
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({colorScheme = "primary"}) => ({
          backgroundColor: `${colorScheme}.500`,
          borderRadius: {base: "full", lg: "3xl"},
          height: {base: 14, lg: 12},
          paddingX: {base: 8, lg: 6},
          color: "white",
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.600`,
            color: "white",
          },
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
  },
});
