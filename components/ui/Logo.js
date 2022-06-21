import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import logo from '/public/logo.png';

const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  width: 120px;

  img {
    transition: 200ms ease;
  }
`;

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Image src={logo} width={120} height={30} alt='KORUND' />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
