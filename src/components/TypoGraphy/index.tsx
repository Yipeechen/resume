import styled from 'styled-components';
import { ReactNode } from 'react';

interface HeadingSecondaryProps {
  children: ReactNode;
}

interface HeadingTertiaryProps {
  className?: string;
  children: ReactNode;
}

const StyledHeadingSecondaryWrapper = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  ${({ theme }) => theme.mobile`
    margin-bottom: 2.4rem;
    width: 100%;
  `}
`;
const StyledHeadingSecondary = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, ${({ theme }) => theme.color.primaryLight}, ${({ theme }) => theme.color.primaryDark});
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
`;
const StyledHeadingTertiary = styled.h3.attrs(({ className }) => ({
  className: className,
}))`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const HeadingSecondary = ({ children }: HeadingSecondaryProps) => (
  <StyledHeadingSecondaryWrapper>
    <StyledHeadingSecondary>
      {children}
    </StyledHeadingSecondary>
  </StyledHeadingSecondaryWrapper>
);

export const HeadingTertiary = ({ className, children }: HeadingTertiaryProps) => (
  <StyledHeadingTertiary className={className}>
    {children}
  </StyledHeadingTertiary>
);
