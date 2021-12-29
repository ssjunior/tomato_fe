import { Flex, Heading, Image } from "theme-ui";

export const Default = ({ children, ...props }) => (
  <Flex
    sx={{
      minHeight: "100vh",
      overflow: "auto",
    }}
  >
    <div
      sx={{
        flexDirection: "column",
        borderRight: "1px solid #ededed",
        width: 224,
        minWidth: 224,
        display: "flex",
        px: 3,
      }}
    >
      <Heading>Header content</Heading>
    </div>

    <div
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <div
        sx={{
          width: "100%",
          maxWidth: 768,
          mx: "auto",
        }}
      >
        <Heading>children</Heading>
      </div>
    </div>
  </Flex>
);
