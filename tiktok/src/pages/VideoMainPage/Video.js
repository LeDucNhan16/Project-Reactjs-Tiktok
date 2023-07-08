import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCommentDots,
  faHeart,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import config from "../../config/index";
import Image from "../../Image/Image";
import styles from "./VideoPage.module.scss";
import Button from "../../components/Button/Button";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowRightIconIcon,
  BirdIcon,
  EraseIcon,
  FacebookIcon,
  PhoneIcon,
  PlaneRedIcon,
  ShackleMineIcon,
  TagSyntaxIcon,
} from "../../Layouts/Icons/Icons";
import ShareInformationVideoMain from "./ShareInformationVideoMain/ShareInformationVideoMain";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import images from "../../assets/Images";
import IconComment from "./IconComment";
import SearchVideo from "./SearchVideo/SearchVideo";
import Menu from "./PopperVideo/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    id: "1",
    title: "Violence, abuse, and criminal exploitation",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          id: "1",
          title: "Please select a scenario",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting sexual exploitation of people under 18, including child sexual abuse material (CSAM), grooming, solicitation, and pedophilia Showing or promoting physical abuse, neglect, endangerment, and psychological abuse of people under 18 Showing or promoting trafficking of people under 18 and recruitment of child soldiers Promoting or facilitating underage marriage",
              },
            ],
          },
        },
        {
          id: "2",
          title: "Exploitation and abuse of people under 18",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing, promoting, or threatening physical violence, including real-world torture, graphic violence, and extreme physical fighting Promoting or materially supporting violent or hateful organizations, including violent extremists and criminal organizations",
              },
            ],
          },
        },
        {
          id: "3",
          title: "Physical violence and violent threats",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting non-consensual sexual acts that are real or fictional, including rape and molestation Showing or promoting non-consensual sharing of intimate content or threats to share such content Editing content to sexualize someone or create the appearance of them engaging in sexual activity Unwanted or degrading statements, such as statements about someone’s private body parts, sexual activity, or private sex life",
              },
            ],
          },
        },
        {
          id: "5",
          title: "Sexual exploitation and abuse ",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting physical abuse, mistreatment, and neglect of animals Showing or promoting sexual activity between an animal and a human (bestiality) Educational and documentary content that raises awareness about animal abuse is allowed as long as it does not include graphic content.",
              },
            ],
          },
        },
        {
          id: "6",
          title: "Human exploitation",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Human trafficking Human smuggling",
              },
            ],
          },
        },
        {
          id: "7",
          title: "Animal abuse",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting physical abuse, mistreatment, and neglect of animals Showing or promoting sexual activity between an animal and a human (bestiality) Educational and documentary content that raises awareness about animal abuse is allowed as long as it does not include graphic content.",
              },
            ],
          },
        },
        {
          id: "8",
          title: "Other criminal activities",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing, promoting, or providing instructions on how to commit theft, destruction of property, and other criminal activities that may harm people, animals, or the natural environment",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "2",
    title: "Hate and harassment",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          id: "1",
          title: "Hate speech and hateful behaviors",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting violence, discrimination, and other harms, including claiming supremacy on the basis of personal characteristics, such as race, religion, gender, and sexual orientation Demeaning someone on the basis of these personal characteristics, including using hateful slurs Denying well-documented historical events that harmed protected groups, such as the Holocaust Promoting or supporting items, individuals, and organizations that promote hateful ideologies",
              },
            ],
          },
        },
        {
          id: "2",
          title: "Harassment and bullying",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting insulting someone or threatening to insult someone, including using profanity or obscene language to degrade them Showing, promoting, or threatening harassment or bullying, physical or otherwise, of others including coordinated harassment Showing, promoting, or threatening behaviors such as doxing, blackmailing, revealing, or calling for the reveal of private or sensitive information",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "3",
    title: "Suicide and self-harm",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            "Suicide and self-har We don’t allow the following Showing, promoting, or providing instructions on suicide, self-harm, and related games, dares, challenges, hoaxes, and pact Sharing plans for suicide and self-harm",
        },
      ],
    },
  },
  {
    id: "4",
    title: "Disordered eating and unhealthy body image",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            "We don’t allow the following Showing or promoting disordered eating, such as extreme dieting, fasting, bingeing, and intentional vomiting, as well as other dangerous weight loss behaviors, including compulsive exercise and use of potentially harmful medications and supplement Showing or promoting unhealthy body measurement trends",
        },
      ],
    },
  },
  {
    id: "5",
    title: "Dangerous activities and challenges",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            "Dangerous activities and challenges We don’t allow the following: Showing or promoting dangerous activities, games, dares, challenges, or stunts that cause or could cause significant physical harm or property damage, such as inappropriate use of dangerous tools, consumption of dangerous substances, and dangerous driving behavior Use of ceremonial tools, such as spears and shields, in religious festivals and cultural performances, is allowed",
        },
      ],
    },
  },
  {
    id: "6",
    title: "Nudity and sexual content",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          id: "1",
          title: "Youth sexual activity, solicitation, and exploitation",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing or promoting child sexual abuse material (CSAM) or youth sexual activity Showing or promoting youth nudity Promoting or normalizing youth sexual exploitation, sexual abuse, and sexual fetishism, including grooming, sextortion, and pedophilia Showing or promoting sexual solicitation, including inviting people under 18 to engage in a sexual act, go off-platform, and share sexually explicit images, even if the initiator is also under 18 Objectifying or sexualizing people under 18 through images or in-app interaction features",
              },
            ],
          },
        },
        {
          id: "2",
          title: "Sexually suggestive behavior by youth",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Significant youth body exposure Seductive performances by people under 18 Direct or indirect references and hints to sex and sexual activities by young people Some non-sexualized content showing areolas or nipples in medical contexts, for educational purposes, or as part of a culturally accepted practice is allowed. Body exposure in culturally expected contexts, such as athletes wearing sports apparel and swimmers wearing swimsuits at a beach, is allowed.",
              },
            ],
          },
        },
        {
          id: "3",
          title: "Adult sexual activity, services, and solicitation",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Offering or asking for sexual partners or engaging in a sexual act Sexually explicit content, including pornographic content showing sexual intercourse, masturbation, and vivid descriptions of sexual acts",
              },
            ],
          },
        },
        {
          id: "5",
          title: "Adult nudity",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Adult nudity, including in photography and digitally created images (such as manga and anime) Some non-sexualized content showing areolas or nipples in medical contexts, for educational purposes, as part of a culturally accepted practice, or in culturally expected contexts, such as showing areolas or nipples during breastfeeding or at celebration festivals (like a carnival), is allowed.",
              },
            ],
          },
        },
        {
          id: "6",
          title: "Sexually explicit language",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Sexually explicit narratives, such as vivid descriptions of sexual acts by adults or people under 18",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "7",
    title: "Shocking and graphic content",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            " We don’t allow the following: Graphic deaths and accidents Human or animal body parts that are dismembered, mutilated, charred, burned, or severely injured Some content shown in an educational, artistic, or professional setting, such as professional fighting, is allowed.",
        },
      ],
    },
  },
  {
    icon: <ArrowRightIconIcon />,
    id: "8",
    title: "Misinformation",
    children: {
      data: [
        {
          id: "1",
          title: "Election misinformation",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Misinformation on how to vote or run for office Misinformation on final election results or outcomes",
              },
            ],
          },
        },
        {
          id: "2",
          title: "Harmful misinformation",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Misinformation that poses a risk to public safety or may cause panic, such as using old footage of a past event and falsely presenting it as current, or spreading inaccurate claims that essential items like food or water are no longer available Medical misinformation that poses a risk to public health, such as misleading statements about vaccines, and inaccurate medical advice that discourages people from getting appropriate medical care Climate change misinformation that contradicts well-established scientific consensus, such as denying the existence of climate change Dangerous conspiracy theories that promote violence, hatred, or target individuals, such as those causing prejudice toward a specific group and cause harm",
              },
            ],
          },
        },
        {
          id: "3",
          title: "Deepfakes, synthetic media, and manipulated media",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Synthetic or manipulated media showing realistic scenes that are not prominently disclosed or labeled in the video Synthetic media that contains the likeness (visual or audio) of a real person when used for political or commercial endorsements, or if violative of our community guidelines Material that has been edited in a way that may mislead a person about real-world events Synthetic media showing a public figure in artistic and educational contexts, such as a celebrity doing a popular dance, and a historical figure featured in a history lesson, is allowed.",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "8",
    title: "Deceptive behavior and spam",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          id: "1",
          title: "Fake engagement",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Providing instructions or promoting methods or services to help a user artificially increase engagement, such as selling followers or likes",
              },
            ],
          },
        },
        {
          id: "2",
          title: "spam",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Accounts that are operated in bulk or through unauthorized automation such as bots to distribute high-volume content, including for commercial purposes Networks of accounts that represent similar entities or post similar content to lead users to specific locations on TikTok or off-platform, such as other accounts, websites, and businesses",
              },
            ],
          },
        },
        {
          id: "3",
          title: "Undisclosed branded content",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  " We don’t allow the following: Users are required to clearly disclose their Branded Content. Branded content on TikTok is defined as content that promotes goods or services where the creator will receive (or have already received) something of value from a third party, such as a brand, in exchange for creator’s post, or which creator might otherwise need to disclose in accordance with the local laws or regulations. It could be a brand endorsement, partnership, or another kind of promotion for a product or service. Branded Content should follow our Branded Content Policy.",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "9",
    title: "Regulated goods and activities",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          id: "1",
          title: "Gambling",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Gambling services, such as casinos, poker, slot games, roulette, lotteries, betting tips, and gambling-related software and apps",
              },
            ],
          },
        },
        {
          id: "2",
          title: "Alcohol, tobacco, and drugs",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Showing young people possessing, consuming, or trading alcohol, tobacco products, drugs, or other regulated substances Showing or promoting adults consuming drugs or other regulated substances for recreational purposes Showing or promoting the misuse of common household items or over-the-counter products to get intoxicated, such as antihistamines and sniffing glue Providing instructions on how to make homemade spirits, drugs, or other regulated substances Facilitating the trade or purchase of alcohol, tobacco products, drugs, or other regulated substances",
              },
            ],
          },
        },
        {
          id: "3",
          title: "Firearms and dangerous weapons",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  " We don’t allow the following:  Showing or promoting firearms or explosive weapons that are not used in a safe or appropriate setting  Facilitating the trade of or offering instructions on how to make firearms or explosive weapons",
              },
            ],
          },
        },
        {
          id: "4",
          title: "Trade of other regulated goods and servicest",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Trading fake currency and documents and stolen information Trading wildlife animals and any part of an endangered animal, such as products and medicine made from elephant ivory",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "10",
    title: "Frauds and scams",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            "We don’t allow the following: Financial, investment, employment, or phishing scam, including identity theft Coordination or facilitation of scams, or instructions on how to carry out scams Organizational fraud, such as money laundering and moving illegally acquired money for someone else (money muling) Recruitment for multi-level marketing (MLM)",
        },
      ],
    },
  },
  {
    id: "11",
    title: "Sharing personal information",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            "We don’t allow the following: Sharing personal phone numbers and home addresses Sharing financial and payment information, such as bank accounts and credit card numbers Sharing login information, such as usernames and passwords Sharing identity documentation or numbers, such as passports and social security numbers",
        },
      ],
    },
  },
  {
    id: "12",
    title: "Counterfeits and intellectual property",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          id: "1",
          title: "Counterfeit products",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                title:
                  "We don’t allow the following: Gambling services, such as casinos, poker, slot games, roulette, lotteries, betting tips, and gambling-related software and apps",
                children: {
                  data: [
                    {
                      id: "1",
                      title: "I am the rights holder",
                      icon: <ArrowRightIconIcon />,
                      children: {
                        data: [
                          {
                            to: "https://www.tiktok.com/legal/page/global/copyright-policy/en",
                          },
                        ],
                      },
                    },
                    {
                      id: "2",
                      title: "Suspected infringement of others",
                      icon: <ArrowRightIconIcon />,
                      children: {
                        data: [
                          {
                            title:
                              "We don’t allow the following:  Faciliating the trade of counterfeit products, such as luxury goods",
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: "2",
          title: "Intellectual property violation",
          icon: <ArrowRightIconIcon />,
          children: {
            data: [
              {
                to: "https://www.tiktok.com/legal/page/global/copyright-policy/en",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "13",
    title: "Sharing personal information",
    icon: <ArrowRightIconIcon />,
    children: {
      data: [
        {
          title:
            "We don’t allow the following: Our priority is to provide a safe and supportive environment. We also encourage authentic interactions by keeping deceptive content and accounts off our platform. Select this if your reason for reporting does not fall under any of the listed categories.",
        },
      ],
    },
  },
];

function Video({
  srcImg,
  srcVideo,
  nameMain,
  nameSub,
  titleId,
  titleMain,
  titleMusic,
  btn__Following = false,
  title__active__HeartIcon,
  title__HeartIcon,
  title__CommentIcon,
  title__bookMarkIcon,
  title__bookMarkIcon__active,
}) {
  const [heart, setHeart] = useState(true);
  const [book, setBook] = useState(false);
  const [follow, setFollow] = useState(true);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef();

  const useElementOnScreen = (options, targetRef) => {
    const [isVisible, setIsVisible] = useState();
    const callbackFunction = (entries) => {
      const [entry] = entries; //const entry = entries[0]
      setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
      return options;
    }, [options]);

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, optionsMemo);
      const currentTarget = targetRef.current;
      if (currentTarget) observer.observe(currentTarget);

      return () => {
        if (currentTarget) observer.unobserve(currentTarget);
      };
    }, [targetRef, optionsMemo]);
    return isVisible;
  };

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const isVisible = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  // Copy

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("");
  }
  return (
    <div className={cx("wrapperSub")}>
      <div className={cx("video__main")}>
        <video
          ref={videoRef}
          onClick={handleVideo}
          src={srcVideo}
          muted
          loop
          className={cx("video__main__video")}
        />
        <div className={cx("video__main__header")}>
          <Button to={config.routers.Home} className={cx("btn__erase")}>
            <EraseIcon className={cx("btn__icon")} />
          </Button>

          <SearchVideo />

          <Menu items={MENU_ITEMS}>
            <div className={cx("reports")}>
              <FontAwesomeIcon icon={faFlag} />
              <span className={cx("reports__title")}>Reports</span>
            </div>
          </Menu>
        </div>
      </div>
      <div className={cx("video")}>
        <div className={cx("video__head")}>
          <Image className={cx("img__video")} alt="img__video" src={srcImg} />
          <div className={cx("video__head__sub")}>
            <span className={cx("name")}>
              <h3> {nameMain}</h3>
              <span className={cx("name__sub")}>{nameSub}</span>
            </span>
          </div>

          {btn__Following && (
            <div
              onClick={() => setFollow(!follow)}
              className={cx("btn__following")}
            >
              {follow ? (
                <Button primaryRed>Follow</Button>
              ) : (
                <Button primaryActive>Following</Button>
              )}
            </div>
          )}
        </div>
        {/* video sub */}
        <div className={cx("video__main__navigation")}>
          <div className={cx("title__wrapper")}>
            <p className={cx("title")}>{titleMain}</p>
            <nav className={cx("title__nav")}>{titleId}</nav>
            <div className={cx("music")}>
              <FontAwesomeIcon icon={faMusic} className={cx("icon")} />
              <span>Nhạc Nền </span>
              <span className={cx("music__btn")}>{titleMusic}</span>
            </div>
          </div>
          <div className={cx("navigation__sub")}>
            <div className={cx("interact")}>
              <div className={cx("block")} onClick={() => setHeart(!heart)}>
                {heart ? (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon
                        className={cx("icon", "icon__active")}
                        icon={faHeart}
                      />
                    </div>
                    <span>{title__active__HeartIcon}</span>
                  </div>
                ) : (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
                    </div>
                    <span>{title__HeartIcon}</span>
                  </div>
                )}
              </div>

              <div className={cx("block")}>
                <div className={cx("block__icon")}>
                  <div className={cx("block__icon__btn")}>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faCommentDots}
                    />
                  </div>
                  <span>{title__CommentIcon}</span>
                </div>
              </div>

              <div className={cx("block")} onClick={() => setBook(!book)}>
                {book ? (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon
                        className={cx("icon", "icon__active__book")}
                        icon={faBookmark}
                      />
                    </div>
                    <span>{title__bookMarkIcon}</span>
                  </div>
                ) : (
                  <div className={cx("block__icon")}>
                    <div className={cx("block__icon__btn")}>
                      <FontAwesomeIcon
                        className={cx("icon")}
                        icon={faBookmark}
                      />
                    </div>
                    <span>{title__bookMarkIcon__active}</span>
                  </div>
                )}
              </div>
            </div>
            {/*  Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. */}

            {/* navigation share video */}
            <div className={cx("share")}>
              <span>
                <Tippy
                  interactive
                  content="Embed"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <span>
                    <TagSyntaxIcon />
                  </span>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="CopyIcon"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <span>
                    <PlaneRedIcon />
                  </span>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="Share to Facebook"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <Link
                    className={cx("share__icon")}
                    href="https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&display=popup&sdk=joey&u="
                  >
                    <FacebookIcon />
                  </Link>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="Share to WhatsApp"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <Link
                    className={cx("share__icon")}
                    href="https://api.whatsapp.com/send/?text=https%3A%2F%2Fwww.tiktok.com%2F%40canh_12x1_cl_ls%2Fvideo%2F7243452450525482245%3Fis_from_webapp%3D1%26sender_device%3Dpc%26web_id%3D7129525144692213249&type=custom_url&app_absent=0"
                  >
                    <PhoneIcon />
                  </Link>
                </Tippy>
              </span>
              <span>
                <Tippy
                  interactive
                  content="Share to Twitter"
                  delay={[200, 100]}
                  placement="top"
                  hideOnClick={false}
                >
                  <Link
                    className={cx("share__icon")}
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Frefer_source%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540canh_12x1_cl_ls%252Fvideo%252F7243452450525482245%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7129525144692213249%26text%3Dhttps%253A%252F%252Fwww.tiktok.com%252F%2540canh_12x1_cl_ls%252Fvideo%252F7243452450525482245%253Fis_from_webapp%253D1%2526sender_device%253Dpc%2526web_id%253D7129525144692213249"
                  >
                    <BirdIcon />
                  </Link>
                </Tippy>
              </span>

              <span>
                <ShareInformationVideoMain />
              </span>
            </div>
          </div>
          {/* copy Link */}
          <div className={cx("copy")}>
            <form className={cx("copy__form")}>
              <textarea
                ref={textAreaRef}
                defaultValue="http://localhost:3000/videoPage"
              />
            </form>
            {
              /* Logical shortcut for only displaying the 
          button if the copy command exists */
              document.queryCommandSupported("copy") && (
                <div className={cx("copy__btn")}>
                  <button onClick={copyToClipboard}>Copy Link</button>
                  {copySuccess}
                </div>
              )
            }
          </div>

          {/* comment user */}
          <div className={cx("comment")}>
            <Comment
              images={images.images1}
              name="nào hết iu anh thì đổi tên🦦"
              title="ơ kìa anh quay lại hủy diệt tình yêu đi chứ"
              timeComment="13h"
              moreComment="1"
              Favourite="100"
              FavouriteActive="101"
            />
            <Comment
              images={images.images2}
              name="𝓝𝓪 𝓱𝓪𝔂 𝓭𝓸̂̃𝓲👑"
              title="K hề :))) nyc em chờ em đi làm về ngủ xong lúc sau em phát hiện ra anh ấy cũng ntin với 1 em khác"
              timeComment="3h"
              Favourite="123"
              moreComment="3"
              FavouriteActive="124"
            />
            <Comment
              images={images.images3}
              name="Nào hết buồn đổi tên💔"
              title="Vậy chờ tới ngủ quên thì sao mn 😂😂😂😂😂"
              timeComment="16h"
              Favourite="12"
              moreComment="1"
              FavouriteActive="11"
            />
            <Comment
              images={images.images4}
              name="Layla Phạm🐻💞"
              title="anh ta nói tớ đi chơi khuya tớ thấy cũng gần 11h nên nhắn hỏi thăm lo lắng và anh ta ko nhận tn sáng anh nhắn 1 câu anh ngủ quên"
              timeComment="23h"
              Favourite="23"
              moreComment="1"
              FavouriteActive="24"
            />
          </div>
        </div>

        {/* add comment */}
        <div className={cx("add__comment")}>
          <form className={cx("add__comment__from")}>
            <input placeholder="Add conment..." />

            <Tippy
              interactive
              content="@ a user to tag them in your comments"
              delay={[200, 100]}
              placement="top"
              hideOnClick={false}
            >
              <span className={cx("button__iconShackle")}>
                <ShackleMineIcon />
              </span>
            </Tippy>

            <span className={cx("button__icon")}>
              <IconComment />
            </span>
          </form>
          <button className={cx("btn")}>Post</button>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  srcImg: PropTypes.string,
  srcVideo: PropTypes.string,
  nameMain: PropTypes.string,
  nameSub: PropTypes.string,
  titleId: PropTypes.string,
  titleMain: PropTypes.string,
  titleMusic: PropTypes.string,
  btn__Following: PropTypes.bool,
  title__active__HeartIcon: PropTypes.string,
  title__HeartIcon: PropTypes.string,
  title__CommentIcon: PropTypes.string,
  title__bookMarkIcon: PropTypes.string,
  title__shareIcon: PropTypes.string,
  title__bookMarkIcon__active: PropTypes.string,
};

export default Video;
