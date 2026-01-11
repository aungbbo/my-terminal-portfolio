import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
  TextContainer,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`

 █████╗ ██╗   ██╗███╗   ██╗ ██████╗     ██████╗  ██████╗     ██████╗  ██████╗
██╔══██╗██║   ██║████╗  ██║██╔════╝     ██╔══██╗██╔═══██╗    ██╔══██╗██╔═══██╗
███████║██║   ██║██╔██╗ ██║██║  ███╗    ██████╔╝██║   ██║    ██████╔╝██║   ██║
██╔══██║██║   ██║██║╚██╗██║██║   ██║    ██╔══██╗██║   ██║    ██╔══██╗██║   ██║
██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝    ██████╔╝╚██████╔╝    ██████╔╝╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝     ╚═════╝  ╚═════╝     ╚═════╝  ╚═════╝
`}
        </PreName>
        <PreWrapper>
          <PreNameMobile style={{ fontSize: "0.7em" }}>
            {`
 █████╗ ██╗   ██╗███╗   ██╗ ██████╗
██╔══██╗██║   ██║████╗  ██║██╔════╝
███████║██║   ██║██╔██╗ ██║██║  ███╗
██╔══██║██║   ██║██║╚██╗██║██║   ██║
██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝

██████╗  ██████╗     ██████╗  ██████╗
██╔══██╗██╔═══██╗    ██╔══██╗██╔═══██╗
██████╔╝██║   ██║    ██████╔╝██║   ██║
██╔══██╗██║   ██║    ██╔══██╗██║   ██║
██████╔╝╚██████╔╝    ██████╔╝╚██████╔╝
╚═════╝  ╚═════╝     ╚═════╝  ╚═════╝
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        {/* <Seperator>----</Seperator> */}
        <TextContainer>
          <div>
            Type '<Cmd>help</Cmd>' to see the list of available commands.
          </div>
          <div>
            Type '<Cmd>gui</Cmd>' or click{" "}
            <a
              href="https://aungbobo.dev/"
              target="_blank"
              style={{
                textDecoration: "underline",
                color: "inherit",
                borderBottom: "none",
              }}
            >
              here
            </a>{" "}
            for simpler version.
          </div>
        </TextContainer>
        {/* <Seperator>----</Seperator> */}
      </div>
    </HeroContainer>
  );
};

export default Welcome;
