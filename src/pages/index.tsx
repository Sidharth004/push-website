// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable */

// React + Web3 Essentials
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useEffect, useLayoutEffect, useState } from "react";

// External Components
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { BsArrowUpRight, BsFileX } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

// Internal Components
import Blogs from "@site/src/components/Blogs";
import FadeInAnimation from "@site/src/components/FadeInAnimation";
import AnalyticsStats from "@site/src/components/Home/AnalyticsStats";
import PushProductsScroll from "@site/src/components/Home/PushProductsScroll";
import ShowcasePartners from "@site/src/components/Home/ShowcasePartners";
import HybridSection from "@site/src/components/HybridSection";
import ImageHolder from "@site/src/components/ImageHolder";
import MarqueeAnimation from "@site/src/components/MarqueeAnimation";
import PageWrapper from "@site/src/components/PageWrapper";
import SignupInput from "@site/src/components/SignUp/SignupInput";
import {
  A,
  Content,
  H1,
  H2,
  Image,
  ItemH,
  ItemV,
  Section,
  Span
} from "@site/src/css/SharedStyling";
import useMediaQuery from "@site/src/hooks/useMediaQuery";

// Import Assets
import BNBChainSVG from "@site/static/assets/BNBChain.svg";
import DiscordSVG from "@site/static/assets/discord.svg";
import EthLogoTextSVG from "@site/static/assets/ethereum-logo-landscape.svg";
import GithubSVG from "@site/static/assets/github.svg";
import PolygonLogoTextSVG from "@site/static/assets/polygon_logo_text_black.svg";
import TwitterSVG from "@site/static/assets/twitter.svg";
import CensorshipresistantFigure from "@site/static/assets/website/illustrations/censorshipresistant.svg";
import ChainAgnosticFigure from "@site/static/assets/website/illustrations/chainagnostic.svg";
import DecentralizedstackFigure from "@site/static/assets/website/illustrations/decentralizedstack.svg";
import GrowWithPushFigure from "@site/static/assets/website/illustrations/growwithpush.webp";
import ImmediatecommunicationFigure from "@site/static/assets/website/illustrations/immediatecommunication.svg";
import ImproveduxFigure from "@site/static/assets/website/illustrations/improvedux.svg";
import SecurityalertsFigure from "@site/static/assets/website/illustrations/securityalerts.svg";

// Internal Configs
import { InvList } from "@site/src/config/HomeInvestorList";
import { MediaList } from "@site/src/config/HomeMediaList";
import GLOBALS, { device } from '@site/src/config/globals';
import { PageMeta } from "@site/src/config/pageMeta";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Setup some constants
const MARQUEE_ANIMATION_SPEED = 60;

export default function Home(): JSX.Element {
  // Internationalization
  const { t, i18n } = useTranslation();

  const isLargeScreen = useMediaQuery("(max-width: 1250px)");

  // Hero Shrink Animation
  useLayoutEffect(() => {
    gsap.to("#herobg", {
      scrollTrigger: {
        trigger: "#herobg",
        start: "center center",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
      scale: 0.985,
      borderRadius: GLOBALS.ADJUSTMENTS.RADIUS.LARGE,
    });

    gsap.to("#integratePush", {
      scrollTrigger: {
        trigger: "#newone",
        start: "center top",
        end: "+=500",
        scrub: true,
        markers: false,
      },
      scale: 0.985,
      borderRadius: GLOBALS.ADJUSTMENTS.RADIUS.LARGE,
    });
  }, []);

  const [showMoreTeamMembers, setShowMoreTeamMembers] = useState(false);

  const onClickViewMoreTeamMembers = (e) => {
    e.preventDefault();
    setShowMoreTeamMembers(!showMoreTeamMembers);
  };

  return (
    <Layout title={PageMeta.HOME.pageTitle} description={PageMeta.HOME.pageDescription}>
      {/* <Head>
        <meta property="og:image" content="image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://example.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Organization',
            name: 'Meta Open Source',
            url: 'https://opensource.fb.com/',
            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
          })}
        </script>
      </Head> */}
      
      <HomeWrapper>
        {/* HERO SECTION */}
        <Section
          id="hero"
          minHeight={`calc(100vh + ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE})`}
          background={GLOBALS.COLORS.BG_LIGHT}
          width="100%"
          overflow="hidden"
          className="darkBackground"
        >
          <ItemV
            // id="herobg"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_DARK}
            borderRadius={`0 0 ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
          />

          <HeroContent alignSelf="center">
            <HeroAnimation>
              <Spline scene="https://prod.spline.design/vhrszmXNdAbcAHQW/scene.splinecode" />
            </HeroAnimation>
            <HeroPrimary flex="initial" justifyContent="flex-start">
              <HeroItem
                maxWidth="50%"
                alignItems="flex-start"
                margin="100px 0 0 0"
              >
                {/* <FadeInAnimation wrapperElement="div" delay={0.25}> */}
                  <H1 zIndex="2">{t("home.hero.title")}</H1>
                {/* </FadeInAnimation> */}

                <Span
                  margin='20px 0px 40px 0'
                  color="rgba(255, 255, 255, 1)"
                  zIndex="2"
                >
                  {/* <FadeInAnimation wrapperElement="div" delay={0.35}> */}
                    {t("home.hero.description")}
                  {/* </FadeInAnimation> */}
                </Span>

                {/* <FadeInAnimation wrapperElement="div" delay={0.55}> */}
                  <HeroCTA justifyContent="flex-start" gap="18px">
                    <A
                      href="/docs"
                      title={t("home.hero.alt-start-button")}
                      background={GLOBALS.COLORS.HIGHLIGHT}
                      color={GLOBALS.COLORS.FONT_LIGHT}
                      lineHeight="26px"
                      zIndex="2"
                    >
                      {t("home.hero.start-button")}
                    </A>
                    <A
                      href="https://app.push.org/"
                      title={t("home.hero.alt-explore-button")}
                      target="_blank"
                      background={GLOBALS.COLORS.BG_DARK_SECONDARY}
                      lineHeight="26px"
                      zIndex="2"
                    >
                      {t("home.hero.explore-button")}
                    </A>
                  </HeroCTA>
                {/* </FadeInAnimation> */}

                {/* <FadeInAnimation wrapperElement="div" delay={0.65}> */}
                  <ItemH
                    justifyContent="flex-start"
                    margin={`${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0px ${GLOBALS.ADJUSTMENTS.PADDING.BIG} 0`}
                  >
                    <A
                      href="https://twitter.com/pushprotocol"
                      title="Push Protocol Twitter"
                      target="_blank"
                      margin="0 0 0 -10px"
                      background="transparent"
                      padding="10px 15px"
                    >
                      <TwitterSVG width={32} height={32} />
                    </A>

                    <A
                      href="https://github.com/ethereum-push-notification-service"
                      title="Push Github"
                      target="_blank"
                      background="transparent"
                      padding="10px 15px"
                    >
                      <GithubSVG width={32} height={32} />
                    </A>

                    <A
                      href="https://discord.gg/pushprotocol"
                      title="Push Discord"
                      target="_blank"
                      background="transparent"
                      padding="10px 15px"
                    >
                      <DiscordSVG width={32} height={32} />
                    </A>
                  </ItemH>
                {/* </FadeInAnimation>   */}
              </HeroItem>
            </HeroPrimary>

            <AnalyticsStatsContainer
              position="absolute"
              zIndex="9"
              left="0"
              right="0"
              bottom="7vh"
            >
              <AnalyticsStats />
            </AnalyticsStatsContainer>
          </HeroContent>
        </Section>

        {/* MISSING PIECE OF WEB3 */}
        <StorySection id="story" data-bkg="light" className="lightBackground">
          <Content
            className="contentBox"
            alignSelf="center"
          >
            <ShowcasePartners />

            <Partners margin="40px 0">
              <ItemV>
                <Span
                  fontWeight="400"
                  color="#303C5E"
                  fontSize="19px"
                  lineHeight="160%"
                  letterSpacing="-0.03em"
                >
                  {t("home.partners-section.networks")}{" "}
                </Span>
              </ItemV>

              <LiveNetworks>
                <LiveNetworkCard className="network">
                  <EthLogoTextSVG
                    alt="Logo for Ethereum"
                    title="Ethereum Logo"
                  />
                </LiveNetworkCard>

                <LiveNetworkCard className="network">
                  <PolygonLogoTextSVG
                    alt="Logo for Polygon"
                    title="Polygon Logo"
                  />
                </LiveNetworkCard>

                <LiveNetworkCard className="network">
                  <BNBChainSVG
                    alt="Logo for BNB Chain"
                    title="BNB Chain Logo"
                  />
                </LiveNetworkCard>
              </LiveNetworks>
            </Partners>

            <PushWorksRow>
              <ItemImage justifyContent="center">
                <Image
                  src={require(`@site/static/assets/website/illustrations/pushnotifandchat.webp`).default}
                  srcSet={`${require(`@site/static/assets/website/illustrations/pushnotifandchat@2x.webp`).default} 2x, ${require(`@site/static/assets/website/illustrations/pushnotifandchat@3x.webp`).default} 3x`}
                  alt={t("home.partners-section.alt-missing-web3-image")}
                  style={{ margin: "0 auto" }}
                />
              </ItemImage>

              <ItemV
                justifyContent="space-around"
                minHeight="530px"
                alignItems="flex-start"
              >
                <ResponsiveH2
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                >
                  {t("home.partners-section.missing-web3-title")}
                </ResponsiveH2>

                <Span
                  fontWeight="400"
                  color="#303C5E"
                  fontSize="19px"
                  lineHeight="160%"
                  letterSpacing="-0.03em"
                  margin="10px 0px 0px 0px"
                >
                  {t("home.partners-section.missing-web3-text")}
                </Span>

                <Span
                  fontWeight="500"
                  color="#121315"
                  fontSize="22px"
                  lineHeight="142%"
                  letterSpacing="-0.03em"
                  margin="10px 0px 0px 0px"
                >
                  {t("home.partners-section.missing-web3-span")}
                </Span>

                <A
                  href="https://docs.push.org/developers"
                  title={t("home.partners-section.missing-web3-alt-button")}
                  target="_blank"
                  background="#DD44B9"
                  borderRadius="16px"
                  padding="14px 32px"
                  fontSize="18px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="26px"
                  alignSelf="center"
                  margin="0px"
                >
                  {/* Learn about $PUSH */}
                  {t("home.partners-section.missing-web3-button")}
                  <BsArrowUpRight className="anchorSVGlink" />
                </A>
              </ItemV>
            </PushWorksRow>
          </Content>
        </StorySection>
        
        {/* BUILD WITH PUSH */}
        <BuildWithPushSection
          curve="both"
          id="buildWithPush"
          data-bkg="dark"
          className="darkBackground"
        >
          <BodyContent className="contentBox">
            <SignupBox margin="0 0 0px 0">
              <ItemV justifyContent="flex-start" alignItems='flex-start' gap="12px">
                <ResponsiveH2
                  color="#09090B"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.email-section.title")}
                </ResponsiveH2>
                <Span
                  color="#303C5E"
                  fontSize="20px"
                  fontWeight="400"
                  letterSpacing="-0.03em"
                  lineHeight="138.5%"
                >
                  {t("home.email-section.text")}
                </Span>
              </ItemV>

              <ItemV>
                <SignupInput />
              </ItemV>
            </SignupBox>
            <PushProductsScroll />
          </BodyContent>
        </BuildWithPushSection>
        
        {/* SECTION THAT SHRINKS WHEN REACHING END */}
        <ShrinkingSection
          curve="bottom"
          data-bkg="dark"
          className="darkBackground"
        >
          <ItemV
            id="integratePush"
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            background={GLOBALS.COLORS.BG_LIGHT}
            borderRadius={`0 0 ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE} ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE}`}
          />

          <Content
            className="contentBox"
            alignSelf="center"
            padding="40px 0px"
          >
            {/* GROW WITH PUSH */}
            <IntegrateGrowWithPushRow gap="18px">
              <Image
                className="figureSvg"
                src={require(`@site/static/assets/website/illustrations/growwithpush.webp`).default}
                srcSet={`${require(`@site/static/assets/website/illustrations/growwithpush.webp`).default} 2x, ${require(`@site/static/assets/website/illustrations/growwithpush.webp`).default} 3x`}
                srcSet={GrowWithPushFigure}
                alt={t("home.grow-section.image-alt")}
                title={t("home.grow-section.image-title")}
                width="100%"
                height="100%"
              />

              <ResponsiveH2
                color="#121315"
                fontSize="40px"
                fontWeight="700"
                letterSpacing="-0.02em"
                lineHeight="110%"
                margin="-32px 0 0 0"
              >
                {t("home.grow-section.title")}
              </ResponsiveH2>

              <Span
                className="growWithPushtext"
                color="#303C5E"
                fontSize="19px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="160%"
              >
                {t("home.grow-section.text")}
              </Span>
            </IntegrateGrowWithPushRow>
            
            {/* INTEGRATE AND EARN */}
            <ItemH margin="120px 0 0 0">
              <IntegrateAndEarn>
                <ResponsiveH2
                  color="#09090B"
                  fontSize="36px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.grow-section.wallet-text.part1")} <br></br>{" "}
                  {t("home.grow-section.wallet-text.part2")}
                </ResponsiveH2>

                <A
                  href="/docs"
                  title={t("home.grow-section.button-alt")}
                  background="#DD44B9"
                  borderRadius="16px"
                  padding="10px 15px"
                  fontSize="18px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="26px"
                  alignSelf="center"
                >
                  {t("home.grow-section.button")}
                </A>
              </IntegrateAndEarn>
            </ItemH>

            {/* WHY YOU NEED PUSH PUSH */}
            <ItemH margin="80px 0 0 0">
              <ItemV justifyContent="flex-start" alignItems="flex-start">
                <ResponsiveH2
                  color="#09090B"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.why-push-section.title")}
                </ResponsiveH2>
              </ItemV>
            </ItemH>

            {/* WHY YOU NEED PUSH PUSH */}
            <ItemH padding="80px 0 0 0">
              <Matrix>
                <MatrixCell>
                  <div className="matrixFigure">
                    <ChainAgnosticFigure
                      alt="Icon showing Push is chain agnostic"
                      title={t("home.why-push-section.chain-agnostic-text")}
                    />
                  </div>

                  <Span
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.chain-agnostic-text")}
                  </Span>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <ImmediatecommunicationFigure
                      alt="Icon showing Immediate Communication"
                      title={t(
                        "home.why-push-section.immediate-communication-text"
                      )}
                    />
                  </div>

                  <Span
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.immediate-communication-text")}
                  </Span>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <DecentralizedstackFigure
                      alt="Icon showing decentralization"
                      title={t(
                        "home.why-push-section.decentralized-stack-text"
                      )}
                    />
                  </div>

                  <Span
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.decentralized-stack-text")}
                  </Span>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <ImproveduxFigure
                      alt="Icon showing User Experience"
                      title={t("home.why-push-section.improved-ux-text")}
                    />
                  </div>

                  <Span
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.improved-ux-text")}
                  </Span>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <SecurityalertsFigure
                      alt="Icon showing Security"
                      title={t("home.why-push-section.security-alerts-text")}
                    />
                  </div>

                  <Span
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.security-alerts-text")}
                  </Span>
                </MatrixCell>

                <MatrixCell>
                  <div className="matrixFigure">
                    <CensorshipresistantFigure
                      alt="Icon showing Censorship Resistance"
                      title={t(
                        "home.why-push-section.censorship-resistant-text"
                      )}
                    />
                  </div>

                  <Span
                    color="#09090B"
                    fontSize="24px"
                    fontWeight="500"
                    letterSpacing="-0.03em"
                    lineHeight="142%"
                  >
                    {t("home.why-push-section.censorship-resistant-text")}
                  </Span>
                </MatrixCell>
              </Matrix>
            </ItemH>

            {/* WHY YOU NEED PUSH PUSH */}
            <WhyPushTextBox textAlign="center" margin="80px 160px">
              <Span
                color="#303C5E"
                fontSize="19px"
                fontWeight="400"
                letterSpacing="-0.03em"
                lineHeight="142%"
              >
                {t("home.why-push-section.text")}
              </Span>
            </WhyPushTextBox>

            {/* BLOG SECTION */}
            <ItemH margin="80px 0 0 0">
              <ItemV justifyContent="flex-start" alignItems="flex-start">
                <ResponsiveH2
                  color="#09090B"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                  width="50%"
                >
                  {t("home.insights-section.title")}
                </ResponsiveH2>
              </ItemV>

              <ItemH justifyContent="flex-end">
                <A
                  href="/blog"
                  title="Exlore all articles"
                  target="_blank"
                  hoverBackground="transparent"
                  hover="transparent"
                  background="transparent"
                  filter="none"
                  color="#DD44B9"
                  borderRadius="16px"
                  padding="14px 32px"
                  fontSize="18px"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                  lineHeight="142%"
                >
                  {t("home.insights-section.link-text")}
                  <BsArrowUpRight className="anchorSVGlink" />
                </A>
              </ItemH>
            </ItemH>

            <Blogs count={4} />

            {/* BACKED BY SECTION */}
            <Section flexDirection="column" margin="80px 0 80px 0">
              <Content padding="0px">

                <ItemV
                  alignItems="stretch"
                >
                  <InvestorHeader
                      color="#09090B"
                      fontSize="40px"
                      fontWeight="700"
                      letterSpacing="-0.02em"
                      lineHeight="110%"
                      margin="0"
                    >
                      {t("home.investors-section.title")}
                  </InvestorHeader>
                </ItemV>
                <ItemV
                  margin="80px 0 0 0"
                  flex="1"
                  alignItems="stretch"
                >
                  <MarqueeAnimation
                    speed={MARQUEE_ANIMATION_SPEED}
                    gradientWidth={8}
                    gap={18}
                  >
                    {InvList.top.map((item) => {
                      return (
                        <InvestorCard 
                          key={item.id}
                        >
                          <InvestorIcon
                            width={item.title ? 64 : 'auto'}
                            src={require(`@site/static/assets/website/investors/${item.srcref}.webp`).default}
                            srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                            alt={`${item?.alt}`}
                          />
                          {item.title && 
                            <InvestorDetails>
                              <InvestorTitle>{item.title}</InvestorTitle>
                              {item.subtitle && 
                                <InvestorSubtitle>{item.subtitle}</InvestorSubtitle>
                              }
                            </InvestorDetails>
                          }
                        </InvestorCard>
                      );
                    })}
                  </MarqueeAnimation>
                </ItemV>
                <ItemV
                  margin="120px 0 0 0"
                  flex="1"
                  alignItems="stretch"
                >
                  <MarqueeAnimation
                    speed={MARQUEE_ANIMATION_SPEED}
                    gradientWidth={8}
                    gap={18}
                    direction="right"
                  >
                    {InvList.bottom.map((item) => {
                      return (
                        <InvestorCard 
                          key={item.id}
                          flexDirection={item.title ? 'row' : 'column'}
                        >
                          <InvestorIcon
                            width={item.title ? '64px' : 'auto'}
                            borderRadius={item.title ? '50%' : '0'}
                            src={require(`@site/static/assets/website/investors/${item.srcref}.webp`).default}
                            srcSet={`${require(`@site/static/assets/website/investors/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/investors/${item.srcref}@3x.webp`).default} 3x`}
                            alt={`${item?.alt}`}
                          />
                          {item.title && 
                            <InvestorDetails>
                              <InvestorTitle>{item.title}</InvestorTitle>
                              {item.subtitle && 
                                <InvestorSubtitle>{item.subtitle}</InvestorSubtitle>
                              }
                            </InvestorDetails>
                          }
                        </InvestorCard>
                      );
                    })}
                  </MarqueeAnimation>
                </ItemV>

              </Content>
            </Section>
          </Content>
        </ShrinkingSection>
        
        {/* MEDIA COVERAGE SECTION */}
        <FeaturedInSection
          id="featuredIn"
          data-bkg="dark"
          className="darkBackground"
        >
          <Content
            className="contentBox"
            padding="40px"
            alignSelf="flex-start"
          >

            <ItemH justifyContent="flex-start">
              <ItemH justifyContent="flex-start" alignItems="flex-start">
                <H2
                  color="#FFFFFF"
                  fontSize="40px"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  lineHeight="110%"
                  margin="0"
                >
                  {t("home.featured-section.title")}
                </H2>
              </ItemH>
            </ItemH>
          </Content>

          <FeaturedCardList
            className="featuredInMarquee"
            id="newone"
          >
            <MarqueeAnimation speed={MARQUEE_ANIMATION_SPEED * 1.15} gradient={false}>
              {MediaList.map((item) => {
                return (
                  <FeaturedCard key={item.srcref}>
                    <FeaturedCardTitle>
                      {t(item.translatedtitle)}
                    </FeaturedCardTitle>
                    <ArticleSource>
                      <Image
                        width={item.title ? '64px' : 'auto'}
                        borderRadius={item.title ? '50%' : '0'}
                        src={require(`@site/static/assets/website/coverage/${item.srcref}.webp`).default}
                        srcSet={`${require(`@site/static/assets/website/coverage/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/coverage/${item.srcref}@3x.webp`).default} 3x`}
                        alt={`${item?.alt}`}
                      />
                      <A
                        href={item.url}
                        title={t(item.urltranslatedtitle)}
                        display="flex"
                        alignItems="center"
                        target="_blank"
                        background="transparent"
                        hoverBackground="transparent"
                        hover="transparent"
                        filter="none"
                        color="#DD44B9"
                        borderRadius="16px"
                        fontSize="18px"
                        fontWeight="500"
                        letterSpacing="-0.03em"
                        lineHeight="142%"
                        padding="0"
                      >
                        {t(item.urltranslatedtitle)}
                        <BsArrowUpRight className="anchorSVGlink" />
                      </A>
                    </ArticleSource>
                  </FeaturedCard>
                );
              })}
            </MarqueeAnimation>
          </FeaturedCardList>

        </FeaturedInSection>
        
      </HomeWrapper>
    </Layout>
  );
}

/**
 * V2 Design
 */
const HeroPrimary = styled(ItemH)`
  margin: 120px 0;

  @media ${device.laptop} {
    margin: 80px 0 0 0;
  }

  @media ${device.mobileM} {
    margin: 80px 0 0 0;
  }
`;

const MemberImage = styled(ImageHolder)``;

const HeroAnimation = styled(ItemH)`
  position: absolute;
  top: 0;
  left: 380px;
  right: auto;
  bottom: 150px;
  width: 100%;
  z-index: 1;

  @media ${device.laptop} {
    display: none;
  }
`;

const HeroContent = styled(Content)`

`

const HeroItem = styled(ItemV)`
  z-index: 2;
  @media ${device.laptop} {
    max-width: initial;
    margin: ${(props) => props.margin || "0px"};
  }

  @media ${device.mobileM} {
    max-width: initial;
  }
`;

const HeroCTA = styled(ItemH)`
  @media ${device.mobileM} {
    &.Button {
      display: none;
    }
  }
`;

const AnalyticsStatsContainer = styled(ItemH)`
  margin: 0px;
  flex: 1;
  
  @media ${device.laptop} {
    flex: initial;
    position: relative;
    bottom: auto;
  }
`;

/**
 * Responsive Styled Components for Shared Styling
 */

const ResponsiveSection = styled(HybridSection)`
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  @media (max-width: 380px) {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
`;

const ResponsiveH2 = styled(H2)`
  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const HomeWrapper = styled(ItemV)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  & #hero .contentBox {
    row-gap: 18px;
  }

  & .pushMissingSvg {
    width: 500px;
    @media ${device.laptop} {
      width: 400px;
    }
    @media ${device.tablet} {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    width: 100%;

    & svg.figureSvg {
      width: 100%;
    }
  }
`;

/**
 * Home Page Sections
 */

const HeroSection = styled(ResponsiveSection)`
  padding: 0px 160px 0px 160px;
  width: 100%;
  overflow: hidden;
`;

const StorySection = styled(ResponsiveSection)`
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;

const BuildWithPushSection = styled(ResponsiveSection)`
  overflow: hidden;
  padding: 0px 160px 0px;
  border-radius: 48px;
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    padding: 0px 0px 10px 0px;
  }

  @media ${device.laptopL} {
    padding: 0px 160px 40px;
  }

`;

const ShrinkingSection = styled(ResponsiveSection)`
  width: 100%;
  overflow: hidden;
`;

const ItemImage = styled(ItemV)`
  width: 100%;
  @media ${device.tablet} {
    width: 400px;
    margin: 0 auto;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const FeaturedInSection = styled(ResponsiveSection)`
  padding: 0;
  min-height: auto;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  & .contentBox {
    gap: 80px;
    flex: 0;
    padding-top: 0;
    margin-top: 60px;
    // margin-top: 160px;
  }
`;

const FeaturedInMarquee = styled(ItemH)``;

const ResponsiveHeroContent = styled(ItemH)`
  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 240px;
  }
`;

const HeroBox = styled(ItemV)`
  flex: 0 0 52%;

  @media ${device.tablet} {
    flex: 1;

    & span {
      font-weight: 400;
      font-size: 18px;
    }
  }
`;

const PushWorksRow = styled(ItemH)`
  // column-gap: 105px;
  column-gap: 40px;
  margin-top: 150px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: row;

  @media ${device.laptop} {
    & ${ItemV} {
      align-items: flex-start;

      & ${Span} {
        margin: 10px 0px 0px 0px;
      }

      & ${A} {
        margin: 50px 0px 0px 0px;
      }
    }
  }
  
  @media ${device.tablet} {
    flex-direction: column;
    row-gap: 30px;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media ${device.mobileL} {
    row-gap: 30px;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const PoweringCommunicationRow = styled(ItemH)`
  margin: 80px 0 50px 0;

  @media ${device.tablet} {
    margin-top: 80px;
  }
`;

const LiveNetworks = styled(ItemH)` 
  background: #ffffff;
  border: 1px solid #bac4d6;
  border-radius: 28px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 550px;

  & .network {
    padding: 26px 16px;

    & svg {
      width: 106px;
      height: 26px;
    }
  }

  @media ${device.laptopL} {
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 18px;

    & .network {
      padding: 26px 16px;

      & svg {
        width: 106px;
        height: 26px;
      }
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 18px;
    max-width: initial;
    align-self: stretch;

    & .network {
      padding: 15px 10px;

      & svg {
        width: 79.5px;
        height: 19.5px;
      }
    }
  }
`;

const LiveNetworkCard = styled(ItemV)`
  flex: 1;
  border-right: 1px solid #bac4d6;
  
  &:last-child {
    border-right: 0px;
  }

  @media ${device.tablet} {
    border-right: 1px solid #bac4d6;
  
    &:last-child {
      border-right: 0px;
    }
  }
`;

const BodyContent = styled.div`
	// display: flex;
	// flex-direction: column;
	padding: ${(props) => props.padding || "40px 0px 0px"};
	// position: relative;

	&.contentBox {
	// 	width: 100%;
  //   align-self: center;
    max-width: 1213px;
  //   flex: 1;
  //   display: flex;
	// }

  @media ${device.tablet} {
  	padding: ${(props) => props.padding || "40px 0px"};
  }
`;

const Partners = styled(ItemV)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;

  @media ${device.laptop} {
    flex-direction: column;
    gap: 30px;
  }
`;

const SignupBox = styled(ItemH)`
  background: #b9abef;
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 72px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media ${device.tablet} {
    padding: 24px;
    flex-direction: column;
  }
`;

const GrowPushCard = styled(ItemV)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 32px;
  padding: 60px 80px;
  width: 45%;

  background: ${(props) => props.background || "#FFFBFB"};
  border-radius: 48px;

  & .figureSvg {
    width: 100%;
    height: 227px;

    @media ${device.tablet} {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    padding: 28px;
    border-radius: 36px;
  }
`;

const GrowPushCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const IntegrateGrowWithPushRow = styled(ItemH)`
  margin: 40px 0 0 0;
  padding: 0 160px 0 160px;

  & svg.figureSvg {
    width: 100%;
  }

  @media ${device.tablet} {
    padding-left: 30px;
    padding-right: 30px;
    margin: 0;

    & svg.figureSvg {
      height: 180px;
    }

    & .growWithPushtext {
      text-align: center;
    }
  }
`;

const IntegrateAndEarn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  text-align: center;
  background: rgba(235, 216, 249, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 32px;
  padding: 60px 300px;

  @media ${device.tablet} {
    padding: 32px 36px;
  }
`;

const Matrix = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #000;
`;

const MatrixCell = styled.div`
  display: flex;
  padding: 42px 0 32px 32px;
  flex-direction: column;
  flex-basis: 33.33%;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  box-sizing: border-box;
  position: relative;
  color: #000;
  row-gap: 24px;

  justify-content: space-between;
  flex-direction: column;

  & .matrixFigure {
    display: flex;
    height: 72px;
    align-items: center;
  }

  &:nth-child(3) {
    border-right: 0;
  }

  &:nth-child(6) {
    border-right: 0;
  }

  &::before {
    position: absolute;
    z-index: 1;
    content: "";
    top: -1px;
    left: 0;
    height: 8px;
    width: 96px;
    background: #dd44b9;
  }

  @media ${device.tablet} {
    flex-basis: 50%;
    padding: 16px 12px;
    row-gap: 16px;

    &:nth-child(2) {
      border-right: 0;
    }

    &:nth-child(4) {
      border-right: 0;
    }

    &:nth-child(3) {
      border-right: 1px solid #000;
    }

    &:nth-child(6) {
      border-right: 0;
    }

    & span {
      font-size: 20px;
    }

    & .matrixFigure {
      margin-top: 8px;
    }
  }
`;

const WhyPushTextBox = styled(ItemH)`
  margin: 80px 160px;

  @media ${device.tablet} {
    margin: 50px 0;

    & span {
      text-align: center;
      font-size: 16px;
      line-height: 160%;
    }
  }
`;

const BuiltByIntro = styled(ItemH)`
  margin: 120px 160px;

  @media ${device.tablet} {
    margin: 40px 0;
  }
`;

const FeaturedCell = styled.div`
  width: 568px;
  height: 224px;

  padding: 48px 32px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;

  flex-basis: 100%;

  border: 1px solid #fff;
  border-left: 0;
  color: "#FFF";

  &::before {
    position: absolute;
    z-index: 1;
    content: "";
    top: -1px;
    left: 0;
    height: 8px;
    width: 96px;
    background: #dd44b9;
  }

  &:hover {
    background: linear-gradient(251.72deg, #dd44b9 14.29%, #8b6fd9 86.35%);

    &::before {
      background: #ffffff;
    }

    & a {
      color: #fff;
    }
  }
`;

const BuiltByCards = styled(ItemH)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 26px;

  transition: all 350ms linear;
`;

const TeamMemberButtons = styled(ItemH)`
  @media ${device.tablet} {
    & a {
      width: 100%;
    }
  }
`;

const InvestorHeader = styled(ResponsiveH2)`
  flex-direction: column;
  width: 60%;
  align-self: flex-start;

  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`;

const InvestorCard = styled(ItemV)`
    border: 1px solid rgb(204, 204, 204);
    border-radius: 74px;
    padding: 8px;
    min-width: 242px;
    min-height: 66px;
    margin-right: 18px;
    flex: 0;
`

const InvestorIcon = styled(Image)`
  
`

const InvestorDetails = styled(ItemV)`
  align-self: stretch;
  flex: 1;
`

const InvestorTitle = styled(Span)`
  font-weight: 500;
  font-size: 22px;
  line-height: 142%;
  color: #09090b;
`

const InvestorSubtitle = styled(Span)`
  font-weight: 500;
  font-size: 9px;
  line-height: 160%;
  letter-spacing: 0.11em;
  color: #303c5e;
  text-transform: uppercase;
`

const FeaturedCardList = styled(ItemH)`
  margin: 0 0 320px 0;
  flex-flow: nowrap;
`
const FeaturedCard = styled(ItemV)`    
  width: 554px;
  padding: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;
  border-right: 1px solid #fff;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  & a {
    border-radius: 0px;
  }

  &:before {
    position: absolute;
    z-index: 1;
    content: "";
    top: -1px;
    left: 0px;
    height: 8px;
    width: 96px;
    background: rgb(221, 68, 185);
  }

  &:hover {
    background: linear-gradient(251.72deg, rgb(221, 68, 185) 14.29%, rgb(139, 111, 217) 86.35%);

    &:before {
      background: #fff;
    }

    & a {
      color: #fff !important;
      border-radius: 0px;
    }
  }
`

const FeaturedCardTitle = styled(Span)`
  flex: initial;
  align-self: auto;
  color: rgb(255, 255, 255);
  background: transparent;
  font-weight: 400;
  font-size: 22px;
  text-transform: inherit;
  margin: 0px;
  padding: 0px;
  letter-spacing: -0.03em;
  text-align: initial;
  line-height: 142%;
  position: initial;
  inset: auto;
  z-index: auto;
  padding-bottom: 50px;
`

const ArticleSource = styled(ItemH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex: 0;

  & img {
    height: 40px;
  }
`;