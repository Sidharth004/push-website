// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';

import { device } from '@site/src/config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

import { A, H2, H3, ItemH, ItemV, Span } from '../../css/SharedStyling';
import Accordion from '@site/src/components/Accordion';
import { General } from '@site/src/config/ChainFAQconfig';
import DiscordSVG from '@site/static/assets/website/shared/discord.svg';
import { ChainEmailSignup } from './ChainEmailSignup';

const ChainBottomComponent: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);

  return (
    <ChainBottomComponentWrapper>
      {/* faq section */}
      <ItemH
        flexDirection={isMobile && 'column'}
        alignItems='flex-start'
        justifyContent='space-between'
        gap={!isMobile && '70px'}
      >
        <ItemV
          alignItems='flex-start'
          justifyContent='flex-start'
          padding={!isMobile && '23px 0 0 0'}
        >
          <H2
            color='#000'
            fontSize={isMobile ? '36px' : '48px'}
            fontFamily='N27'
            textAlign={isMobile && 'center'}
            margin={isMobile && '0 auto'}
            fontWeight='500'
            lineHeight='120%'
          >
            Frequently Asked Questions
          </H2>

          <FaqLink
            href='https://discord.gg/pushprotocol'
            target='_blank'
            title='Discord'
            fontSize='16px'
            margin={isMobile ? '24px auto 0 auto' : '24px 0 0 0'}
            background='#5865F2'
            color='#FFF'
            fontFamily='N27'
          >
            <DiscordSVG width={24} />
            <p>Ask us on Discord</p>
            <BsArrowUpRight className='anchorSVGlink' />
          </FaqLink>
        </ItemV>

        <ItemV alignItems='flex-start' justifyContent='flex-start'>
          <AccordionGrid>
            <Accordion
              items={General}
              fontFamily='N27'
              textColor='#000 !important'
              fontWeight='500'
              fontSize='24px'
            />
          </AccordionGrid>
        </ItemV>
      </ItemH>

      <ElevateSection>
        <ItemH maxWidth='850px' margin='0 auto'>
          <H3
            color='#FFF'
            fontSize={isMobile ? '36px' : '48px'}
            fontFamily='N27'
            textAlign='center'
            fontWeight='500'
            lineHeight='120%'
            letterSpacing='-0.72px'
          >
            Elevate your app with the most powerful Universal Chain for web3
          </H3>
        </ItemH>

        <ItemH flex='0'>
          <FaqLink
            href='https://discord.gg/pushprotocol'
            target='_blank'
            title='Discord'
            fontSize='16px'
            margin={isMobile ? '24px auto 0 auto' : '48px 0'}
            background='#D548EC'
            color='#FFF'
            fontFamily='N27'
          >
            <p>Start Building</p>
            <BsArrowRight className='anchorSVGlink' />
          </FaqLink>
        </ItemH>

        {/* image here */}
        <div style={{ height: '200px' }}></div>
      </ElevateSection>

      <InputSection>
        <ItemH maxWidth={!isMobile && '470px'} padding={!isMobile && '0 24px'}>
          <Span
            color='#000'
            fontSize={isMobile ? '20px' : '24px'}
            fontFamily='N27'
            fontWeight='500'
            lineHeight='120%'
            letterSpacing='-0.48px'
          >
            Subscribe to be among the first to get whitelisted & get timely
            updates
          </Span>
        </ItemH>

        <ItemH>
          <ChainEmailSignup showButton={true} />
        </ItemH>
      </InputSection>
    </ChainBottomComponentWrapper>
  );
};

export default ChainBottomComponent;

const ChainBottomComponentWrapper = styled.div`
  width: 1200px;
  margin: 113px auto 0 auto;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }

  @media ${device.tablet} {
    padding: 0 24px;
  }

  @media ${device.mobileL} {
    margin: 103px auto 0 auto;
    padding: 0 16px;
  }
`;

const FaqLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: inherit;
  gap: 12px;

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #fff;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #fff;
    }
  }
`;

const AccordionGrid = styled.div`
  max-width: 800px;
  min-width: 800px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }

  @media ${device.mobileL} {
    margin-top: 24px;
  }
`;

const ElevateSection = styled.div`
  width: 100%;
  margin-top: 300px;
  border-radius: 32px;
  background: #000;
  padding: 64px 64px 0px 64px;

  @media ${device.mobileL} {
    margin-top: 200px;
    padding: 64px 24px 0px 24px;
  }
`;

const InputSection = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 240px;
  border-radius: 32px;
  background: #e492ff;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 33px;

  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 240px;
  }
`;
