import styled from "styled-components";

const WelcomeWrapper = styled.div`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text[100]};
`;

const Welcome = () => (
  <WelcomeWrapper>
    <p>Welcome to my terminal portfolio!</p>
    <p>
      Type <strong>'help'</strong> to see available commands.
    </p>
  </WelcomeWrapper>
);

export default Welcome;
