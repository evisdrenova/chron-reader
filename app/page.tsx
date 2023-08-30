"use client";
import Image from "next/image";
import { useState } from "react";
import axios, { AxiosError } from "axios";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [pageData, setPageData] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function getWebpageHTML(): Promise<string> {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
      throw new Error(`Error fetching webpage: ${axiosError.message}`);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = async () => {
    // const data = await getWebpageHTML();
    const footerString = "<!-- e hearst/common/author_body.tpl -->";

    // Find the position of the search string
    const searchStringIndex = page.indexOf(footerString);

    console.log("search stirng", searchStringIndex);

    if (searchStringIndex !== -1) {
      // Delete content after the search string
      const modifiedHtmlString = page.substring(
        0,
        searchStringIndex + footerString.length
      );

      // console.log(modifiedHtmlString);
      setPageData(modifiedHtmlString);
    } else {
      console.log("Search string not found.");
    }
  };

  return (
    <div className="mx-10 mt-10">
      <div className="text-4xl text-center">Welcome to chron reader.</div>
      <div className="text-xl text-center pt-10">
        I hate the SF chronicle and I refuse to give them a single penny but I
        want to read their articles and get angry at how shittily they cover
        crime in SF. So I created this app that just takes in a chronical
        article URL (for ex.
        https://www.sfchronicle.com/crime/article/sf-crime-assault-bat-shopkeeper-dies-18336329.php)
        and then returns a version of the article that is free to read so that
        you also never have to pay them.
      </div>
      <div className="flex flex-row items-center gap-4 mt-20 mx-40">
        <input
          id="urlInput"
          type="text"
          className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="https://www.example.com"
          value={url}
          onChange={handleInputChange}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>

      <div className="w-full border-2 border-gray-400 mt-20 rounded-lg">
        {!pageData ? (
          <p className="p-20">Your page will render here</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: pageData }} />
        )}
      </div>
      <div>{error && <p>There is an error: ${error}</p>}</div>
    </div>
  );
}

const page = `




<!-- hearst/article/article_main.tpl -->

            <!-- hearst/article/articleMain.tpl -->



    
        <!doctype html>
<html class="no-js "  lang="en-US" prefix="og: http://ogp.me/ns#  article: http://ogp.me/ns/article#">
    <head>
<!-- hearst/article/headerMain.tpl -->

    <meta id="internalEid" name="internal:eid" content="article-18336716">
    <!-- Includes for HashTag Labs -->
    
    <!-- eid:article.18336716 -->
    <!-- generated at 2023-08-30 13:35:25 on pwcm4 running vv14.4.5 -->
            <!-- hmb:jquery jQuery JS -->
        <script type="text/javascript" src="/js/core/libs/jquery-2.2.4.min.js"></script>
                <!-- hmb:treg TREG JS -->
        <script type="text/javascript">window.tregEnabled = true;</script>
        <script type="text/javascript" src="//treg.hearstnp.com/treg.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- hmb:taboola Sailthru  -->
        <!-- hearst/home/header_sailthru.tpl -->
<meta property="sailthru.title" content="‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard" /><meta name="sailthru.date" content="2023-08-30 10:20:00 -0700" /><meta name="sailthru.description" content="A wealthy San Francisco woman trying to shut down a public court literally has one in her backyard." /><meta name="sailthru.author" content="J.K. Dineen" /><meta name="sailthru_uid" content="18336716" /><meta name="sailthru_pubname" content="san-francisco-chronicle" /><meta name="sailthru_siteid" content="35" /><meta name="sailthru.tags" content="holly-peterson,petersons,phil-ginsburg,karl-peterson,gregg-lynn,hans-carter,mary-tesluk,julia-morgan,j-k,dineen,gen-xers,s-f,presidio-wall,presidio-heights,british-columbia,jackson-street,louis-sutter-playground,golden-gate-bridge,goldman-tennis-center,indiana,aspen,larsen-playground,19th-avenue,my-backyard,wall-street-journal,recreation-and-parks-department,presidio-trust,reddit,tudor,jdineen-sfchronicle-com,my-backyard,wall-street-journal,recreation-and-parks-department,presidio-trust,holly-peterson,petersons,phil-ginsburg,karl-peterson,gregg-lynn,hans-carter,mary-tesluk,julia-morgan,j-k,dineen,gen-xers,s-f,presidio-wall,presidio-heights,british-columbia,jackson-street,louis-sutter-playground,golden-gate-bridge,goldman-tennis-center,indiana,aspen,larsen-playground,19th-avenue,reddit,tudor,jdineen-sfchronicle-com,2fsports-2findividual-sports-2fracquet-sports" /><meta name="sailthru_isPremium" content="true" /><meta name="sailthru.image.thumb" content="https://s.hdnux.com/photos/01/34/20/43/24185034/6/sailthruImage.jpg" />
<!-- e hearst/home/header_sailthru.tpl -->
    
        <title>Rich SF woman trying to end public pickleball court has one at home</title>
    <!-- ux hearst/common/fonts.tpl -->
<link rel="preload" href="/css/core/fonts/national/NationalWeb-Light.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/national/NationalWeb-Medium.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/national/NationalWeb-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/national/NationalWeb-Book.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposHeadlineWeb-Black.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposHeadlineWeb-Light.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposHeadlineWeb-Medium.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposTextWeb-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposTextWeb-BoldItalic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposTextWeb-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/css/core/fonts/tiempos/TiemposTextWeb-RegularItalic.woff2" as="font" type="font/woff2" crossorigin>
<!-- e ux hearst/common/fonts.tpl -->

        <script>
          if ( document.location.hostname.match(/\.$/) ) {
              document.location.replace(
                  document.location.protocol +
                  '//' +
                  document.location.hostname.replace(/\.+$/, '') +
                  ( undefined !== document.location.pathname ? document.location.pathname : '' ) +
                  ( undefined !== document.location.search ? document.location.search : '' )  +
                  ( undefined !== document.location.hash ? document.location.hash : '' )
              );
          }
        </script>

    <script>
                var HDN = HDN || {};
        HDN.t_firstbyte = Number(new Date());
        HDN.dataLayer = HDN.dataLayer || {};
        HDN.dataLayer.content = HDN.dataLayer.content || {};
                HDN.dataLayer.paywall = HDN.dataLayer.paywall || {};
        HDN.dataLayer.paywall.accessRule = "";
        HDN.dataLayer.paywall.mode = "";
        var Article = {
            "id": "18336716",
            "title": "‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard",
            "url": "https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php",
            "slug": "https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php",
            "summary": "In the world of No Pickleball In My Backyard protesters, Holly Peterson stands out for...",
            "image": "https://s.hdnux.com/photos/01/34/20/43/24185034/6/rawImage.jpg",
            "keywords": "",
            "siteName": "San Francisco Chronicle",
            "env": "pwcm4",
            "comments": true,
            "isSensitive": false,
            "version": "v14.4.5",
            "displayTemplate": "dynamic_two_column",
            "renderNLP": true,
            "timing": {
                "firstbyte": HDN.t_firstbyte,
                "ready": {}
            }
        };
        
        document.addEventListener('DOMContentLoaded', function () {
            Article.timing.ready = Number(new Date());
        }, false);
        
    </script>
        
<!-- hearst/common/gdpr.tpl (ccpa) -->
    <script id="hnpprivacy" src="/hdn/dynamic/hnpprivacy-min.js"></script>
<!-- e hearst/common/gdpr.tpl (ccpa) -->    <!-- hearst/common/hdn_datalayer_header.tpl -->

                                                                      
<script type="text/javascript">
    // <![CDATA[

        var HDN = HDN || {};
        HDN.dataLayer = HDN.dataLayer || {};

        // HDN.dataLayer object for content and href data
        HDN.dataLayer.content = HDN.dataLayer.content || {};
        HDN.dataLayer.href = HDN.dataLayer.href || {};

    
                    HDN.dataLayer.content.title = "‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard";
                HDN.dataLayer.content.subtitle = "";
        HDN.dataLayer.content.objectId = "18336716";
        
        HDN.dataLayer.content.objectType = "article";
                        HDN.dataLayer.content.sectionPath = ['bay area', 'san francisco'];
        HDN.dataLayer.content.pubDate = "2023-08-30 11:00:00";
        HDN.dataLayer.content.lastModifiedDate = "2023-08-30 17:20:11";
        HDN.dataLayer.content.wordCount = 784;
        HDN.dataLayer.content.paragraphCount = 24;
        HDN.dataLayer.content.keywords = [];
        HDN.dataLayer.content.keySubjects = [];
        HDN.dataLayer.content.keyCategoryTags = [];
        HDN.dataLayer.content.keyPersons = [];
        HDN.dataLayer.content.keyOrganizations = [];
        HDN.dataLayer.content.keyConcepts = [];
        HDN.dataLayer.content.keyCategories = [];
        HDN.dataLayer.content.keyPlaces = [];
        HDN.dataLayer.content.keyNlpCategories = ['/Sports/Individual Sports/Racquet Sports'];
        HDN.dataLayer.content.keyNlpPerson = ['Holly Peterson',' Petersons',' Phil Ginsburg',' Karl Peterson',' Gregg Lynn',' Hans Carter',' Mary Tesluk',' Julia Morgan',' J.K.',' Dineen',' Gen-Xers'];
        HDN.dataLayer.content.keyNlpLocation = ['S.F.',' Presidio Wall',' Presidio Heights',' British Columbia',' Jackson Street',' Louis Sutter Playground',' Golden Gate Bridge',' Goldman Tennis Center',' Indiana',' Aspen',' Larsen Playground',' 19th Avenue'];
        HDN.dataLayer.content.keyNlpOrganization = ['My Backyard',' Wall Street Journal',' Recreation and Parks Department',' Presidio Trust'];
        HDN.dataLayer.content.keyNlpEvent = [];
        HDN.dataLayer.content.keyNlpWorkOfArt = [];
        HDN.dataLayer.content.keyNlpConsumerGood = [];
        HDN.dataLayer.content.keyNlpOther = ['Reddit',' Tudor',' jdineen@sfchronicle.com'];
        HDN.dataLayer.content.keyNlpUnknown = [];
        HDN.dataLayer.content.designTemplate = "design/article/dynamic_two_column.tpl";
        HDN.dataLayer.content.isSensitive = false;
        
        // HDN.dataLayer object for source information
        HDN.dataLayer.source = HDN.dataLayer.source || {};

        HDN.dataLayer.source.authorName = "J.K. Dineen";
        HDN.dataLayer.source.authorTitle = "";
        HDN.dataLayer.source.originalSourceSite = "";
        HDN.dataLayer.source.publishingSite = "premiumsfgate";
        HDN.dataLayer.source.sourceSite = "premiumsfgate";
        

                    
                // HDN.dataLayer object for sharing information
        HDN.dataLayer.sharing = HDN.dataLayer.sharing || {};

        HDN.dataLayer.sharing.openGraphUrl = "https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php";
        HDN.dataLayer.sharing.openGraphType = "article";

        HDN.dataLayer.href.pageUrl = "https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php";
        HDN.dataLayer.href.canonicalUrl = "https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php";
        HDN.dataLayer.href.pageUrlPath = window.location.pathname;
        HDN.dataLayer.href.pageUrlPathFolders = window.location.pathname.replace(/[A-Za-z0-9-_.]+$/, '');
        HDN.dataLayer.href.pageUrlQueryParams = window.location.search.replace(/^\?/, '');
        HDN.dataLayer.href.pageUrlHash = window.location.hash;

        // HDN.dataLayer object for site
        HDN.dataLayer.site = HDN.dataLayer.site || {};

        
        
        // "geoloc" and "geocites" used for weather and other location based functionality
        HDN.dataLayer.site.geoloc = "san_francisco";
        HDN.dataLayer.site.geocities = {"antioch":{"geoloc":"antioch","city":"Antioch","state":"CA","lon":"-121.8667495","lat":"37.9810982","lockey":0},"concord":{"geoloc":"concord","city":"Concord","state":"CA","lon":"-122.0339173","lat":"37.9735415","lockey":1},"fairfield":{"geoloc":"fairfield","city":"Fairfield","state":"CA","lon":"-122.1040308","lat":"38.2336466","lockey":2},"hayward":{"geoloc":"hayward","city":"Hayward","state":"CA","lon":"-122.1408151","lat":"37.6179116","lockey":3},"livermore":{"geoloc":"livermore","city":"Livermore","state":"CA","lon":"-121.8427362","lat":"37.6801621","lockey":4},"mill_valley":{"geoloc":"mill_valley","city":"Mill Valley","state":"CA","lon":"-122.5632255","lat":"37.9066967","lockey":5},"mountain_view":{"geoloc":"mountain_view","city":"Mountain View","state":"CA","lon":"-122.1514787","lat":"37.4133027","lockey":6},"napa":{"geoloc":"napa","city":"Napa","state":"CA","lon":"-122.3601701","lat":"38.2859416","lockey":7},"oakland":{"geoloc":"oakland","city":"Oakland","state":"CA","lon":"-122.3757556","lat":"37.7583921","lockey":8},"palo_alto":{"geoloc":"palo_alto","city":"Palo Alto","state":"CA","lon":"-122.1704553","lat":"37.4256448","lockey":9},"richmond":{"geoloc":"richmond","city":"Richmond","state":"CA","lon":"-122.4129987","lat":"37.9552521","lockey":10},"san_carlos":{"geoloc":"san_carlos","city":"San Carlos","state":"CA","lon":"-122.2878715","lat":"37.4983993","lockey":11},"san_francisco":{"geoloc":"san_francisco","city":"San Francisco","state":"CA","lon":"-122.5078117","lat":"37.7576792","lockey":12},"san_jose":{"geoloc":"san_jose","city":"San Jose","state":"CA","lon":"-121.9578406","lat":"37.2969326","lockey":13},"santa_rosa":{"geoloc":"santa_rosa","city":"Santa Rosa","state":"CA","lon":"-122.7737567","lat":"38.4355291","lockey":14}};        
        // Include comments data for page use
        
                                          
              
                                        HDN.dataLayer.site.commentsType = 'spotim';
                HDN.dataLayer.site.commentSiteKey = 'sp_e9s18MG6';
                HDN.dataLayer.site.entitledComments = '1';
                                    
                    HDN.dataLayer.site.sailthruId = 'fca2a0390286f0e53120a668534d9529';
        
                    
                            HDN.dataLayer.site.recaptchaKey = '6LdfZ1YUAAAAAKaNQ3lmSRWa-DnE4Y3AE55RpFFA';
                    
        // HDN.dataLayer object for presentation information
        HDN.dataLayer.presentation = HDN.dataLayer.presentation || {};
                          
        HDN.dataLayer.presentation.hasSlideshow = false;
        HDN.dataLayer.presentation.hasSlideshowListView = false;
        HDN.dataLayer.presentation.hasVideo = false;

                                            HDN.dataLayer.presentation.hasInteractive = true;

                                        
        // HDN.dataLayer object for paywall information
        HDN.dataLayer.paywall = HDN.dataLayer.paywall || {};

                HDN.dataLayer.paywall.premiumStatus = "isPremium";
        HDN.dataLayer.paywall.premiumEndDate = "2033-08-29 00:00:00";
        HDN.dataLayer.content.displayTemplate = "";
        
        HDN.dataLayer.isAffiliatedContent = false;
        HDN.dataLayer.isSponsoredContent = false;
        HDN.dataLayer.isPaidadContent = false;

        
        (function() {
            var cookie = "hnpdiudpf2" + "=";
            var decodedCookie = decodeURIComponent(document.cookie).split(";");
            HDN.dataLayer.identity = HDN.dataLayer.identity || {};

            for(var i = 0; i < decodedCookie.length; i++) {
                var c = decodedCookie[i];
                while(c.charAt(0) == ' ' && c.typeOf == undefined) {
                    c = c.substring(1);
                }
                if(c.indexOf(cookie) == 0 && c.typeOf == undefined) {
                    HDN.dataLayer.identity.firstPartyId = c.substring(cookie.length, c.length);
                    break;
                }
            }
        })();
        

        // paymeter
                    HDN.dataLayer.paywall.policy = "meter";
                           HDN.dataLayer.revenueProfiles = {"profiles":{"cadence":{"dump":{"value":false},"refresh":{"value":true},"interactiveInterval":{"value":"5"},"passiveInterval":{"value":"60"},"scrollInterval":{"value":"30"},"sequence":{"value":"3, 5"},"columnA":{"leaderboard":{"id":"Crown","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"adhesive":{"id":"Flex1","render":false,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"both"},"belowMasthead":{"id":"Flex1","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"both"},"adhesion":{"id":"MAD","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":false,"repeating":false,"template":"two-col"},"BoxX":{"id":"Box","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"both"}},"columnB":{"B0":{"id":"TMP300_3","render":false,"weight":1,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"},"B1":{"id":"A300","render":true,"weight":2,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B2":{"id":"CONCERT1","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B3":{"id":"B300","render":true,"weight":4,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B4":{"id":"CONCERT2","render":true,"weight":5,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B5":{"id":"S300","render":true,"weight":6,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B6":{"id":"Inline","render":false,"weight":6,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"}},"columnC":{"NATIVO":{"id":"NTV7ARD","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"}},"columnX":{"X0":{"id":"RB","render":false,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"}}},"nonsub":{"dump":{"value":false},"refresh":{"value":true},"interactiveInterval":{"value":"5"},"passiveInterval":{"value":"60"},"scrollInterval":{"value":"30"},"sequence":{"value":"3, 5"},"columnA":{"leaderboard":{"id":"Crown","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"adhesive":{"id":"Flex1","render":false,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"both"},"belowMasthead":{"id":"Flex1","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"both"},"adhesion":{"id":"MAD","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":false,"repeating":false,"template":"two-col"},"BoxX":{"id":"Box","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"both"}},"columnB":{"B0":{"id":"TMP300_3","render":false,"weight":1,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"},"B1":{"id":"A300","render":true,"weight":2,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B2":{"id":"CONCERT1","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B3":{"id":"B300","render":true,"weight":4,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B4":{"id":"CONCERT2","render":true,"weight":5,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B5":{"id":"S300","render":true,"weight":6,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B6":{"id":"Inline","render":false,"weight":6,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"}},"columnC":{"NATIVO":{"id":"NTV7ARD","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"}},"columnX":{"X0":{"id":"RB","render":false,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"}}},"sub":{"dump":{"value":false},"refresh":{"value":true},"interactiveInterval":{"value":"5"},"passiveInterval":{"value":"60"},"scrollInterval":{"value":"30"},"sequence":{"value":"3, 5"},"columnA":{"leaderboard":{"id":"Crown","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"adhesive":{"id":"Flex1","render":false,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"both"},"belowMasthead":{"id":"Flex1","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"both"},"adhesion":{"id":"MAD","render":true,"weight":3,"rightRail":false,"adhesive":true,"smallScreen":true,"largeScreen":false,"repeating":false,"template":"two-col"},"BoxX":{"id":"Box","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"both"}},"columnB":{"B0":{"id":"TMP300_3","render":false,"weight":1,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"},"B1":{"id":"A300","render":true,"weight":2,"rightRail":true,"adhesive":false,"smallScreen":false,"largeScreen":true,"repeating":false,"template":"two-col"},"B2":{"id":"CONCERT1","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B3":{"id":"B300","render":true,"weight":4,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B4":{"id":"CONCERT2","render":true,"weight":5,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B5":{"id":"S300","render":true,"weight":6,"rightRail":true,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"},"B6":{"id":"Inline","render":false,"weight":6,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"}},"columnC":{"NATIVO":{"id":"NTV7ARD","render":true,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":true,"largeScreen":true,"repeating":false,"template":"two-col"}},"columnX":{"X0":{"id":"RB","render":false,"weight":3,"rightRail":false,"adhesive":false,"smallScreen":false,"largeScreen":false,"repeating":false,"template":"two-col"}}}}};
                                                    HDN.dataLayer.content.publishedOnline = "2023-08-30 11:00:13";
                    
        HDN.dataLayer.ads = HDN.dataLayer.ads || {};
        HDN.dataLayer.ads.loaded = false;

                    HDN.dataLayer.ads.adMode = '';
                        HDN.dataLayer.ads.videoBidding = true;
        HDN.dataLayer.site.amazonTag = 'hearstnp-sfc-20';
    HDN.dataLayer.site.skimlinksPublisherId = '131678X1600846';

HDN.abData = {};
    

(function () {
    var findAbNames = function() {
        var cookies=document.cookie.split(';');
        var c,s,t;
        for ( var asdf = 0 ; asdf < cookies.length ; asdf++ ) {
            c = cookies[asdf].trim();
            if ( 0 === c.indexOf('ab_name_') ) {
                s = c.split('=');
                if ( 2 === s.length ) {
                    HDN.abData['_hasData'] = 1;
                    if ( undefined === HDN.abData[s[0].substr(8)] ) {
                        HDN.abData[s[0].substr(8)] = ( 'A' === s[1] ? 'C' : 'V1' );
                    }
                }
            }
        }
    };
    findAbNames();
    if ( HDN.abData['_hasData'] ) {
        delete(HDN.abData['_hasData']);

        HDN.dataLayer.abtest = HDN.dataLayer.abtest || {};
        HDN.dataLayer.abtest.experimentId = HDN.dataLayer.abtest.experimentId || [];
        window.aps = window.aps || {};
        window.aps.abtest = window.aps.abtest || '';

        var abDataTmp = []
        for ( var abDataKey in HDN.abData ) {
            abDataTmp.push(abDataKey + '_' + HDN.abData[abDataKey]);
        }

        HDN.dataLayer.abtest.experimentId = HDN.dataLayer.abtest.experimentId.concat(abDataTmp);
        if ( window.aps.abtest ) {
            window.aps.abtest += ',';
        }
        window.aps.abtest += abDataTmp.join(',');
    }
})();


// Includes for HashTag Labs
        

if ( HDN.activeABTest &&
     HDN.dataLayer.abTestProfiles ) {
    if ( HDN.dataLayer.abTestProfiles.files ) {
         if ( HDN.dataLayer.abTestProfiles.files.css &&
              HDN.dataLayer.abTestProfiles.files.css['profiles_' + HDN.activeABTest + '_css'] ) {
             (function () {
                 var l = document.createElement('link');
                 l.rel = 'stylesheet';
                 l.type = 'text/css';
                 l.media = 'all';
                 l.href = HDN.dataLayer.abTestProfiles.files.css['profiles_' + HDN.activeABTest + '_css'];
                 document.head.appendChild(l);
             })();
         }
         if ( HDN.dataLayer.abTestProfiles.files.js &&
              HDN.dataLayer.abTestProfiles.files.js['profiles_' + HDN.activeABTest + '_js'] ) {
             (function () {
                var s = document.createElement('script');
                s.src = HDN.dataLayer.abTestProfiles.files.js['profiles_' + HDN.activeABTest + '_js'];
                s.async = false;
                s.defer = true;
                document.head.appendChild(s);
             })();
         }
    }
    if ( HDN.dataLayer.abTestProfiles.items ) {
         if ( HDN.dataLayer.abTestProfiles.items['profiles_' + HDN.activeABTest + '_css'] ) {
             (function () {
                 var s = document.createElement('style');
                 s.id = HDN.activeABTest + '_css_style_element';
                 s.type = 'text/css';
                 s.appendChild(document.createTextNode(HDN.dataLayer.abTestProfiles.items['profiles_' + HDN.activeABTest + '_css']));
                 document.head.appendChild(s);
             })();
         }
         if ( HDN.dataLayer.abTestProfiles.items['profiles_' + HDN.activeABTest + '_js'] ) {
             (function () {
                 var s = document.createElement('script');
                 s.text = HDN.dataLayer.abTestProfiles.items['profiles_' + HDN.activeABTest + '_js'];
                 document.head.appendChild(s);
             })();
         }
    }
}

    // ]]>
</script>
<!-- e hearst/common/hdn_datalayer_header.tpl -->
    <script type="text/javascript" src="/js/site.js?v14.4.5"></script>
            
            <!-- Hotfix Top Freeform (All Dynamic Two-Column) -->
        <!-- hearst/item/standalone.tpl -->
<!-- mid:freeform.94216 -->
<!-- DO NOT REMOVE -->
<script src="https://projects.sfchronicle.com/shared/js/responsive-frame.js"></script>
<!-- e DO NOT REMOVE -->
        <!-- Hotfix Top Freeform (Local Dynamic Two-Column) -->
        
<!-- noGen: item_header_hotfix_top_dtc_ssl 35 dne  -->
                <link rel="stylesheet" href="/dist/article.min.css?v14.4.5">
                            <!-- hmb:Polyfill  -->
        <script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry%2CPromise%2CCustomEvent%2CArray.prototype.forEach%2CArray.prototype.entries"></script>
                <!-- hmb:js_header Static JS Bundle  -->
        <script type="text/javascript" src="/dist/hdn/article.min.js?v14.4.5"></script>
        <!-- hearst/article/common/meta_tags.tpl -->
<meta name="msvalidate.01" content="9451CA04ABC9D1D5C6419C73B4C4F7B7" />
<meta name="HandheldFriendly" content="true">
<meta name="twitter:dnt" content="on">
<meta name="apple-mobile-web-app-title" content="">
<meta name="environment" content="pwcm4">
<meta name="id" content="18336716">
<link rel="canonical" href="https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php" />
<meta name="robots" content="max-image-preview:large">
    <meta name="robots" content="noarchive">
                                            <meta name="author" content="J.K. Dineen">
        <meta name="author.name" content="J.K. Dineen" />
        <meta name="author.title" content="" />
        <meta name="description" content="A wealthy San Francisco woman trying to shut down a public court literally has one in her backyard."/>
    <meta name="date.release" content="2023-08-30 11:00:13" />
    <meta name="time.release" content="2023-08-30 11:00:13" />
    <meta name="sections" content="Bay Area,San Francisco" />
            <meta name="subject" content="Holly Peterson, Petersons, Phil Ginsburg, Karl Peterson, Gregg Lynn, Hans Carter, Mary Tesluk, Julia Morgan, J.K., Dineen, Gen-Xers, S.F., Presidio Wall, Presidio Heights, British Columbia, Jackson Street, Louis Sutter Playground, Golden Gate Bridge, Goldman Tennis Center, Indiana, Aspen, Larsen Playground, 19th Avenue, My Backyard, Wall Street Journal, Recreation and Parks Department, Presidio Trust, Reddit, Tudor, jdineen@sfchronicle.com" />
        <meta name="news_keywords" content="Holly Peterson, Petersons, Phil Ginsburg, Karl Peterson, Gregg Lynn, Hans Carter, Mary Tesluk, Julia Morgan, J.K., Dineen, Gen-Xers, S.F., Presidio Wall, Presidio Heights, British Columbia, Jackson Street, Louis Sutter Playground, Golden Gate Bridge, Goldman Tennis Center, Indiana, Aspen, Larsen Playground, 19th Avenue, My Backyard, Wall Street Journal, Recreation and Parks Department, Presidio Trust, Reddit, Tudor, jdineen@sfchronicle.com" />
                <meta name="nlpOrganization" content="My Backyard, Wall Street Journal, Recreation and Parks Department, Presidio Trust" />
                <meta name="nlpPerson" content="Holly Peterson, Petersons, Phil Ginsburg, Karl Peterson, Gregg Lynn, Hans Carter, Mary Tesluk, Julia Morgan, J.K., Dineen, Gen-Xers" />
                <meta name="nlpLocation" content="S.F., Presidio Wall, Presidio Heights, British Columbia, Jackson Street, Louis Sutter Playground, Golden Gate Bridge, Goldman Tennis Center, Indiana, Aspen, Larsen Playground, 19th Avenue" />
                            <meta name="nlpOther" content="Reddit, Tudor, jdineen@sfchronicle.com" />
                            <meta name="nlpCategories" content="%2FSports%2FIndividual+Sports%2FRacquet+Sports" />
    <!-- e hearst/article/common/meta_tags.tpl -->    <!-- hearst/article/common/opengraph.tpl -->
<meta property="fb:app_id" content="137086563877087"/><meta property="fb:pages" content="105702905593" /><meta property="fb:pages" content="307851324523" /><meta property="fb:pages" content="12852567813" /><meta property="fb:pages" content="480760515417232" /><meta property="fb:pages" content="288240529145" /><meta property="fb:pages" content="316774245761" /><meta property="fb:pages" content="984197758297116" /><meta property="fb:pages" content="7457442370" /><meta property="fb:pages" content="207033189701" /><meta property="fb:pages" content="207346283795" /><meta property="fb:pages" content="222959748728" /><meta property="fb:pages" content="207042068180" /><meta property="fb:pages" content="72983690774" /><meta property="fb:pages" content="339413234035" /><meta property="fb:pages" content="343689323559" /><meta property="fb:pages" content="345828366626" /><meta property="fb:pages" content="234821559861394" /><meta property="fb:pages" content="335699426867" /><meta property="fb:pages" content="10150105039485602" /><meta property="fb:pages" content="338983127562" /><meta property="fb:pages" content="364516539001" /><meta property="fb:pages" content="337922332042" /><meta property="fb:pages" content="115637335153191" /><meta property="fb:pages" content="372011535931" /><meta property="fb:pages" content="333376634908" /><meta property="fb:pages" content="127590790608884" /><meta property="fb:pages" content="141923885872653" /><meta property="fb:pages" content="655037391286291" /><meta property="fb:pages" content="320774811368833" /><meta property="fb:pages" content="1740489152861748" /><meta property="fb:pages" content="469700473093040" /><meta property="fb:pages" content="386754203367" /><meta property="fb:pages" content="556449374478585" /><meta property="fb:pages" content="340999853450" /><meta property="fb:pages" content="350771491032" /><meta property="fb:pages" content="1120648627959218" /><meta property="fb:pages" content="342017778245" /><meta property="fb:pages" content="338463361591" /><meta property="fb:pages" content="138772706196968" /><meta property="fb:pages" content="1641688532739111" /><meta property="fb:pages" content="326312697536" /><meta property="fb:pages" content="353120110016" /><meta property="fb:pages" content="343366744658" /><meta property="fb:pages" content="335009494554" /><meta property="fb:pages" content="347261603104" /><meta property="fb:pages" content="350924013892" /><meta property="fb:pages" content="257724773860" /><meta property="fb:pages" content="361203926417" /><meta property="fb:pages" content="367174215398" /><meta property="fb:pages" content="284154645394" /><meta property="fb:pages" content="334501182354" /><meta property="fb:pages" content="350279743224" /><meta property="fb:pages" content="154340691263654" /><meta property="fb:pages" content="147848678611852" /><meta property="fb:pages" content="361381078011" /><meta property="fb:pages" content="362831597677" /><meta property="fb:pages" content="10150095255780118" /><meta property="article:content_tier" content="metered" /><meta name="og:datePublished" content="2023-08-30 11:00:00"/><meta property="og:locale" content="en_US"/><meta property="og:type" content="article"/><meta property="og:title" content="‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard"/><meta property="og:description" content="In the world of No Pickleball In My Backyard protesters, Holly Peterson stands out for..."/><meta property="og:url" content="https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php"/><meta property="og:site_name" content="San Francisco Chronicle"/><meta property="og:image" content="https://s.hdnux.com/photos/01/34/20/43/24185034/6/rawImage.jpg"/><meta property="article:published_time" content="2023-08-30 11:00:00" /><meta property="article:modified_time" content="2023-08-30 17:20:11" /><meta property="article:author" content="https://www.facebook.com/SFChronicle/"/><meta property="article:section" content="San Francisco" /><meta property="article:tag" content="Holly Peterson" /><meta property="article:tag" content="Petersons" /><meta property="article:tag" content="Phil Ginsburg" /><meta property="article:tag" content="Karl Peterson" /><meta property="article:tag" content="Gregg Lynn" /><meta property="article:tag" content="Hans Carter" /><meta property="article:tag" content="Mary Tesluk" /><meta property="article:tag" content="Julia Morgan" /><meta property="article:tag" content="J.K." /><meta property="article:tag" content="Dineen" /><meta property="article:tag" content="Gen-Xers" /><meta property="article:tag" content="S.F." /><meta property="article:tag" content="Presidio Wall" /><meta property="article:tag" content="Presidio Heights" /><meta property="article:tag" content="British Columbia" /><meta property="article:tag" content="Jackson Street" /><meta property="article:tag" content="Louis Sutter Playground" /><meta property="article:tag" content="Golden Gate Bridge" /><meta property="article:tag" content="Goldman Tennis Center" /><meta property="article:tag" content="Indiana" /><meta property="article:tag" content="Aspen" /><meta property="article:tag" content="Larsen Playground" /><meta property="article:tag" content="19th Avenue" /><meta property="article:tag" content="My Backyard" /><meta property="article:tag" content="Wall Street Journal" /><meta property="article:tag" content="Recreation and Parks Department" /><meta property="article:tag" content="Presidio Trust" /><meta property="article:tag" content="Reddit" /><meta property="article:tag" content="Tudor" /><meta property="article:tag" content="jdineen@sfchronicle.com" /><meta property="article:content_tier" content="metered" />
<!-- e hearst/article/common/opengraph.tpl -->    <!-- hearst/article/common/twittercard.tpl -->

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:image" content="https://s.hdnux.com/photos/01/34/20/43/24185034/6/rawImage.jpg"/>
<meta name="twitter:description" content="In the world of No Pickleball In My Backyard protesters, Holly Peterson stands out for..."/>
<meta name="twitter:title" content="‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard"/>
<meta name="twitter:site" content="@sfchronicle" />
<!-- e hearst/article/common/twittercard.tpl -->    <!-- hearst/article/common/analytics.tpl -->
<script>var omni_channelPath = "Bay Area :: San Francisco";var omni_title = "‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard";var omni_bizObjectId = "18336716";var omni_className = "article";var omni_publicationDate = "2023-08-30 11:00:00";var omni_sourceSite ="premiumsfgate";var omni_authorName = "J.K. Dineen";var omni_authorTitle = "";var omni_premiumStatus = "isPremium";var omni_premiumEndDate = "2033-08-29 00:00:00";var omni_originalSource = "";var omni_pageNumber = "0";var omni_breakingNewsFlag = "";var omni_localNewsFlag = "";var omni_isListView = "0";var omni_paywallSite = "1";var omni_displayTemplate = "dynamic_two_column";</script>
<!-- e hearst/article/common/analytics.tpl -->    <!-- hearst/common/schema_WebSite.tpl -->
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","url":"https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php","name":"\u2018Hypocrisy of rich\u2019: S.F. woman trying to shut down pickleball court has one in her backyard","mainEntityOfPage":"https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php","publisher":{"@type":"NewsMediaOrganization","name":"San Francisco Chronicle","url":"https://www.sfchronicle.com","logo":{"@type":"ImageObject","url":"https://www.sfchronicle.com/img/ldjson_logo.png","width":600,"height":60},"location":{"@type":"Place","name":"San Francisco Chronicle","address":{"@type":"PostalAddress","addressLocality":"San Francisco","addressRegion":"CA"}},"sameAs":["https://www.facebook.com/SFChronicle/","https://twitter.com/sfchronicle","https://www.instagram.com/sfchronicle/","https://www.linkedin.com/company/sfchronicle"]},"image":{"@type":"ImageObject","url":"https://s.hdnux.com/photos/01/34/20/43/24185034/6/rawImage.jpg","width":2048,"height":1365,"thumbnailUrl":"https://s.hdnux.com/photos/01/34/20/43/24185034/6/square_small.jpg","caption":"The\u00a0Presidio Wall pickleball courts have become a popular spot for San Francisco pickleball players. So much so that neighbors are complaining about the noise and issued a petition to stop the game."},"author":[{"@type":"Person","name":"J.K. Dineen","url":"https://www.sfchronicle.com/author/j-k-dineen/"}],"description":"A wealthy San Francisco woman trying to shut down a public court literally has one in her backyard.","dateModified":"2023-08-30T17:20:11Z","datePublished":"2023-08-30T11:00:00Z"}
</script>
<!-- e hearst/common/schema_WebSite.tpl -->    <!-- hearst/common/schema_BreadcrumbList.tpl -->
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://www.sfchronicle.com/","name":"San Francisco Chronicle"}},{"@type":"ListItem","position":2,"item":{"@id":"https://www.sfchronicle.com/bayarea/","name":"Bay Area"}},{"@type":"ListItem","position":3,"item":{"@id":"https://www.sfchronicle.com/sf/","name":"San Francisco"}},{"@type":"ListItem","position":4,"item":{"@id":"https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php","name":"\u2018Hypocrisy of rich\u2019: S.F. woman trying to shut down pickleball court has one in her backyard"}}],"numberOfItems":4}
</script>
<!-- e hearst/common/schema_BreadcrumbList.tpl -->
    <!-- hearst/article/common/schema_NewsArticle.tpl -->
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"NewsArticle","mainEntityOfPage":"https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php","url":"https://www.sfchronicle.com/sf/article/pickleball-court-presidio-heights-18336716.php","headline":"Rich SF woman trying to end public pickleball court has one at home","articleSection":"Bay Area/San Francisco","publisher":{"@type":"NewsMediaOrganization","name":"San Francisco Chronicle","url":"https://www.sfchronicle.com","logo":{"@type":"ImageObject","url":"https://www.sfchronicle.com/img/ldjson_logo.png","width":600,"height":60},"location":{"@type":"Place","name":"San Francisco Chronicle","address":{"@type":"PostalAddress","addressLocality":"San Francisco","addressRegion":"CA"}},"sameAs":["https://www.facebook.com/SFChronicle/","https://twitter.com/sfchronicle","https://www.instagram.com/sfchronicle/","https://www.linkedin.com/company/sfchronicle"]},"description":"A wealthy San Francisco woman trying to shut down a public court literally has one in her backyard.","image":{"@type":"ImageObject","url":"https://s.hdnux.com/photos/01/34/20/43/24185034/6/rawImage.jpg","width":2048,"height":1365,"thumbnailUrl":"https://s.hdnux.com/photos/01/34/20/43/24185034/6/square_small.jpg","caption":"The\u00a0Presidio Wall pickleball courts have become a popular spot for San Francisco pickleball players. So much so that neighbors are complaining about the noise and issued a petition to stop the game."},"articleBody":"As an\u00a0anti-pickleball crusader, Presidio Heights resident Holly Peterson would hardly seem unusual. After all, plenty of pickleball court neighbors say they are being driven crazy by the bright pock-pock-pock sounds of the country\u2019s fastest-growing sport, a sound one British Columbia couple found so annoying they began a hunger strike to bring attention to their grievances.\u00a0\u00a0 But, in the world of No Pickleball In My Backyard protesters, Peterson stands out for one simple reason: She literally has a pickleball court in her backyard. Last week Peterson, who owns an eight-bedroom house on Jackson Street with her venture capitalist husband Karl Peterson, initiated a petition demanding that the city\u2019s Recreation and Park Department shut down the pickleball courts at Presidio Wall, a playground her home overlooks.\u00a0 In the petition, Peterson argues the sound of yellow-plastic-ball-meets-paddle \u201cisn\u2019t just grating\u201d but that it\u2019s \u201caltering our way of life and the wildlife of our cherished Presidio.\u201d\u00a0 She and another neighbor, Mary Tesluk, demand that the city suspend all pickleball play until a full environmental study can be completed on the sport\u2019s impact on everything from wildlife to parking. \u201cThe endless racket threatens the fragile ecosystem and our community\u2019s prestige,\u201d the petition reads. \u201cThis isn\u2019t just about us \u2014 it\u2019s about preserving nature for future generations.\u201d It didn\u2019t take long for pickleball partisans on Reddit to link to a Wall Street Journal article from May focused on the Julia Morgan-designed Jackson Street home the Petersons currently have on the market for $36 million. The article delves into the attributes of the 11,300 square foot Tudor-style home: its views of the Golden Gate Bridge, and ceiling moldings and fireplaces. And then there is the karaoke room with disco ball and wet bar \u2014 which of course happens to open onto an outdoor pickleball court. San Francisco pickleball proponent Hans Carter, who has lobbied for more courts across the city, said he was shocked when he learned that the person trying to shut down San Francisco\u2019s busiest public courts had her own private court on which to play at her leisure.\u00a0 \u201cWe were just rolling on the floor,\u201d he said. \u201cTalk about the hypocrisy of the rich.\u201d Recreation and Park Director Phil Ginsburg, who has spent much of the past few years attempting to meet San Francisco\u2019s seemingly insatiable hunger for pickleball, said he was aware of the petition \u2014 and of the fact that the petitioner has her own court. \u201cNot everyone can afford a pickleball court in their backyard,\u201d he said. \u201cThat\u2019s why it\u2019s nice to have them in public parks.\u201d The dispute comes as the city scrambles to accommodate the sport\u2019s explosive growth. San Francisco has six dedicated courts at Louis Sutter Playground, five at the Goldman Tennis Center and more scattered around the city in tennis courts, like Presidio Wall, that are lined for pickleball and have designated times for play. Construction has also started on eight courts that will replace a basketball court at Larsen Playground on 19th Avenue.\u00a0\u00a0 At Presidio Wall, two of the tennis courts are now dedicated for pickleball \u2014 two tennis courts have enough space for six pickle courts \u2014\u00a0 and the two other tennis courts are also reserved for pickleball on Saturdays and other times. On Saturdays, the 12 courts regularly draw 100 players. \u201cIt\u2019s the hub,\u201d said Carter. \u201cIt\u2019s just packed. The numbers have exploded. So many Millennials and Gen-Xers show up. We have been asking for overflow for two years.\u201d The petition claims that a \u201cflood of pickleball fanatics\u201d is choking Presidio Trust \u201cslow streets\u201d and that the frenzy of pickleball activity has depressed real estate in the neighborhood.\u00a0\u00a0 \u201cHome values within a 500-foot radius are sinking, deterred by the unyielding noise. This isn\u2019t just a hit to homeowners; it\u2019s a blow to our local economy,\u201d it states. \u201cLet\u2019s halt the noise, protect our wildlife, and secure our property values.\u201d Karl Peterson referred questions to Holly Peterson, who didn\u2019t return a call by press time. In the Wall Street Journal story in May, the Petersons said they bought the home in 2007 for $16.65 million, invested $10 million in renovations and decided to sell it because their teenage children are in boarding school and they have another property in the city, as well as homes in Aspen, Colo., and Indiana.\u00a0 Realtor Gregg Lynn, who has toured the house with prospective buyers, said he has heard nothing but positive feedback on the house.\u00a0 \u201cIt is exceptional, one of the largest homes in the city,\u201d he said. \u201cIt has cultural and architectural heritage as a Julia Morgan masterpiece. It\u2019s been fully renovated in a very tasteful way.\u201d He said his clients were not players but that they \u201cadmired and appreciated the pickleball court.\u201d Reach J.K. Dineen: jdineen@sfchronicle.com","datePublished":"2023-08-30T11:00:00Z","dateModified":"2023-08-30T17:20:11Z","author":[{"@type":"Person","name":"J.K. Dineen","url":"https://www.sfchronicle.com/author/j-k-dineen/"}],"isAccessibleForFree":"False","hasPart":{"@type":"WebPageElement","isAccessibleForFree":"False","cssSelector":".article"}}
</script>
<!-- e hearst/article/common/schema_NewsArticle.tpl -->        <!-- hearst/common/third_party_assets.tpl -->
                    <!-- hmb:juice Juice -->
        <script type="text/javascript">
            
                var startRevWorker = function() {
                    if (window.articleShowLISTQueue) {
                        while (window.articleShowLISTQueue.length > 0) {
                            var showListEntry = articleShowLISTQueue.shift();
                            window.aps.showLIST([showListEntry]);
                        }
                    }
                    if (window.placeAdQueue) {
                        while (window.placeAdQueue.length > 0) {
                            var placeAdEntry = placeAdQueue.shift();
                            window.aps.placeAd([placeAdEntry]);
                        }
                    }
                    if (window.slideshowShowLISTQueue) {
                        while (window.slideshowShowLISTQueue.length > 0) {
                            var ads = window.slideshowShowLISTQueue.shift();
                            window.aps.showLIST(ads);
                        }
                    }
                    window.juiceloaded = true;
                }
            
        </script>

        <!-- ENG-10074 If AB Test on Seattle we turn off Juice in order to use HTL code -->
                    <script  src="https://aps.hearstnp.com/Scripts/loadAds.js?v=1.3.3.5" type="text/javascript" id="adPositionManagerScriptTag"></script>
            
    <!-- hmb:ensighten Ensighten  -->
    <!-- hearst/ensighten/ensighten.tpl -->
<!-- hmb:ensighten Ensighten script -->
<!-- Hearst analytics: Ensighten -->
<script src="https://tm.hdmtools.com/hearst/news/Bootstrap.js"></script>
<!-- End Hearst analytics: Ensighten -->
<!-- e ensighten.tpl -->                    <!-- blueconic -->
        <script src="https://q777.sfchronicle.com/script.js" async></script>
            
    <!-- hmb:taboola Taboola  -->
                            
                            
                <script type="text/javascript">
                    
                    (function () {
                        window._taboolaNetworkMode = false;
                        
                        window._taboola = window._taboola || [];
                        window._taboolaHDNPageLabel = window._taboolaHDNPageLabel || 'article';
                        var tobj = {};
                        tobj[window._taboolaHDNPageLabel] = 'auto';
                        window._taboola.push(tobj);
                        !function (e, f, u, i) {
                            if (!document.getElementById(i)){
                                e.async = 1;
                                e.src = u;
                                e.id = i;
                                f.parentNode.insertBefore(e, f);
                            }
                        }(document.createElement('script'), document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/hearstlocalnews-sfchronicle/loader.js', 'tb_loader_script');
                        if(window.performance && typeof window.performance.mark == 'function') {
                            window.performance.mark('tbl_ic');
                        }
                    })();
                </script>
                
                                <!-- e hearst/common/third_party_assets.tpl -->
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/apple-touch-icon-128x128.png">
            <!-- Hotfix Freeform (All Dynamic Two-Column) -->
        <!-- hearst/item/standalone.tpl -->
<!-- mid:freeform.93530 -->
<!-- ENG-3363 -->
<style>
  .thumbnailListAuthor.one .thumbnailListAuthor--wrapper { margin: 0; }
  @media (min-width: 768px) { .thumbnailListAuthor.two .thumbnailListAuthor--wrapper { margin: 0; } }
  @media (min-width: 928px) { .thumbnailListAuthor.two .thumbnailListAuthor--items { justify-content: space-between; margin: 0; } }
  @media (min-width: 928px) { .thumbnailListAuthor.two .thumbnailListAuthor--item { flex: 0 0 48%; margin: 0; } }
  @media (min-width: 928px) { .thumbnailListAuthor.two .thumbnailListAuthor--spacer { display: none; } }
  @media (min-width: 928px) { .thumbnailListAuthor.three .thumbnailListAuthor--wrapper { margin: 0; } }
</style>
<!-- ENG-3834 -->
<style>
  .alert{background-color:#000;bottom:0;box-sizing:border-box;color:#fff;font-family:Helvetica,sans-serif;font-size:16px;font-weight:600;left:50%;line-height:1.25;overflow:hidden;padding:10px;position:fixed;transform:translateX(-50%);width:100vw;z-index:5000000}.alert .close{border-radius:8px;color:#fff;display:block;position:absolute;right:10px;height:16px;overflow:hidden;top:10px;width:16px}.alert .close::after{background-color:#fff;content:'';display:block;height:2px;left:-6px;position:relative;top:4px;transform:rotate(-45deg);width:30px}.alert .close::before{background-color:#fff;content:'';display:block;height:2px;left:-5px;position:relative;top:9px;transform:rotate(45deg);width:30px}.alert>div{box-sizing:border-box;max-width:1200px;margin:0 auto;position:relative;padding-right:34px}
</style>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {var site=HDN.domain,name=site.charAt(0).toUpperCase()+site.slice(1),section=document.createElement("section"),close=document.createElement("a");close.className="close",close.href="#",close.addEventListener("click",function(e){e.stopPropagation(),e.preventDefault(),e.target.parentElement.style.display="none"});var HTML="<div>Thank you for visiting "+name+". You are using an older browser that may impact your reading experience. For the best experience, we recommend you use Chrome, Safari, Firefox, or Edge.</div>";section.className="alert",section.id="warning",section.innerHTML=HTML,section.appendChild(close),document.getElementsByTagName("body")[0].appendChild(section);}
  }, false);
</script>
<!-- e ENG-3834 -->
<!--  Start ENG-8221 -->
<style>
@media (max-width:768px) {   
  .articleHeader:not(.heroleft):not(.herotextabove):not(.herocenter) .articleHeader--timestamp {     
    bottom: 0px !important;     
    margin-left: 0px !important;     
    position: relative;    
  }
}</style>
        <!-- Hotfix Freeform (Local Dynamic Two-Column) -->
        <!-- hearst/item/standalone.tpl -->
<!-- mid:freeform.94228 -->
<!-- ENG-3224 -->
<style>
@media (max-width: 767px) {
  .adModule-outer.full .adModule-inner {
    width: auto;
    margin: auto;
  }
}
</style>
<!-- End ENG-3224 -->
                    </head>
<!-- e hearst/article/headerMain.tpl -->    <body data-location="sf"  class="two-column">
                                                <!-- design/article/dynamic_two_column.tpl -->
    <!-- hearst/article/types/dynamic_two_column.tpl -->


<div id="zoneTop" class="zone full innerGrid" data-tb-region="zoneAboveMasthead"></div><!-- hearst/common/siteBranding.tpl -->
    <header class="pageHeader standard" data-stage="0">
        <div class="pageHeader--progress"><div class="pageHeader--progress-bar" id="progress"></div></div>    <div class="pageHeader--skipLink-wrapper">
        <a href="#content" class="pageHeader--skipLink" aria-label="Skip to main content">Skip to main content</a>
        <a href="#" class="pageHeader--skipLink" aria-label="" onclick="if (window.refreshId) clearTimeout(window.refreshId)">Turn off refresh</a>
    </div>
    <div class="pageHeader--wrapper lock">
        <button id="navToggle" class="pageHeader--menuButton navToggle" role="button" tabindex="0" aria-expanded="false" aria-label="navigation"></button>                <a id="mastheadLogo" href="/" tabindex="0"><span  class="pageHeader--logo mastheadLogo fade show hdn-analytics" role="img" aria-label="San Francisco Chronicle Homepage - Site Logo" data-hdn-analytics="visit|masthead|navigation|0"></span></a>
                    <div id="titleBar" class="pageHeader--titleBar titleBar fade show hidden">
                                    <div class="pageHeader--titleBar-subsection">Currently Reading</div>
                    <div class="pageHeader--titleBar-title">‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard</div>
                            </div>
                            <div id="nextStory" class="pageHeader--nextStory nextStory fade show hidden"></div>
                            <ul class="pageHeader--links fade show">
                                                                                                                                        <li id="subscription" class="pageHeader--links-nonsub subscribeButton fade show hidden">
                                <a class="visible-xs-f subscribe" href="https://subscription.sfchronicle.com/checkout/1223/2586?siteID=SFC&origin=button&ipid=wcm" target="_blank">Subscribe</a>
                                <a class="hidden-xs button" href="https://subscription.sfchronicle.com/checkout/1223/2586?siteID=SFC&origin=button&ipid=wcm" target="_blank">Subscribe</a>
                            </li>
                                                                                                <li id="eEdition" class="pageHeader--links-sub eEdition fade show hidden"><a href="/e-edition">e-Edition</a></li>
                                                                                                                                        <!-- hearst/common/signin.tpl -->
<li class="treg-is-gigya gigya_menu ">
    <div class="gya-title expandable treg-conditional treg-not-logged-in">
        <a class="signIn featureSignIn" tabindex="0" role="button">Sign In</a>
    </div>
    <div class="gya-title expandable treg-conditional treg-logged-in" aria-controls="treg-login-widget" role="button"><span></span></div>
    <div class="gya-content expandable" id="treg-login-widget">
        <div class="treg-gya-login-widget"></div>
    </div>
</li>
<!-- e hearst/common/signin.tpl -->                <button class="pageHeader--searchButton searchToggle" aria-expanded="false" tabindex="0" aria-label="searchToggle" aria-controls="searchField-aria"></button>            </ul>
                            <div class="pageHeader--search searchField" id="searchField-aria">
                
                <form class="pageHeader--search-form" action="/search/" method="get">
                    <input type="hidden" name="action" value="search" />
                    <input type="hidden" name="firstRequest" value="1" />
                    <input type="hidden" name="searchindex" value="solr" />
                    <div class="fieldset">
                        <input class="pageHeader--search-input" id="search" name="query" type="text" value="" placeholder="Search" aria-label="search" />
                        <button class="searchButton btn" value="" name="search" type="submit" aria-label="search"></button>
                    </div>
                </form>
            </div>
            </div>
                                    
        <!-- hearst/home/HNavigation.tpl -->
<!-- hearst/home/navigation.tpl -->
         <!-- hearst/common/siteNavigation.tpl -->
<nav id="navigation" class="navigation"><div class="navigation--wrapper lock"><div class="navigation--menu"><ul class="hidden-sm hidden-md hidden-lg hidden-xl"><li class="parent topLevel" data-length="3" data-index="1"><span role="heading" aria-level="2"><a  href="/reader-tools/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-6022" data-naveid="6022" data-hdn-analytics="visit|Reader Tools|navigation-ard|1">Reader Tools</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="https://tickets.sfchronicle.com/e/audio-tours" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6029" data-naveid="6029" data-hdn-analytics="visit|Reader Tools-Audio Tours|navigation-ard|1">Audio Tours</a></li><li class="child"><a  href="https://ezads.sfchron.com/sf-adportal/obits/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6053" data-naveid="6053" data-hdn-analytics="visit|Reader Tools-Place an obituary|navigation-ard|2">Place an obituary</a></li></ul></li><li class="single" data-length="1" data-index="2"><a href="/video-visuals/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-5978" data-naveid="5978" data-hdn-analytics="visit|Video & Visuals|navigation-ard|2">Video & Visuals</a></li><li class="parent topLevel" data-length="9" data-index="3"><span role="heading" aria-level="2"><a  href="https://www.sfchronicle.com/climate/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-5969" data-naveid="5969" data-hdn-analytics="visit|Climate|navigation-ard|3">Climate</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 176px"><li class="child"><a  href="https://www.sfchronicle.com/drought/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5973" data-naveid="5973" data-hdn-analytics="visit|Climate-Drought|navigation-ard|1">Drought</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/california-fire-map/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5974" data-naveid="5974" data-hdn-analytics="visit|Climate-Fire Tracker|navigation-ard|2">Fire Tracker</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/earthquakes/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5975" data-naveid="5975" data-hdn-analytics="visit|Climate-Quake Tracker|navigation-ard|3">Quake Tracker</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/drought-map-water-restrictions-bay-area/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6003" data-naveid="6003" data-hdn-analytics="visit|Climate-Drought Map|navigation-ard|4">Drought Map</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/california-air-quality-map/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5972" data-naveid="5972" data-hdn-analytics="visit|Climate-Air Quality Tracker|navigation-ard|5">Air Quality Tracker</a></li><li class="child"><a  href="https://www.sfchronicle.com/california-wildfires/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4580" data-naveid="4580" data-hdn-analytics="visit|Climate-Wildfires|navigation-ard|6">Wildfires</a></li><li class="child"><a  href="https://www.sfchronicle.com/weather/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6023" data-naveid="6023" data-hdn-analytics="visit|Climate-Weather|navigation-ard|7">Weather</a></li><li class="child"><a  href="https://www.sfchronicle.com/weather-forecast/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6122" data-naveid="6122" data-hdn-analytics="visit|Climate-Weather Forecast|navigation-ard|8">Weather Forecast</a></li></ul></li><li class="single" data-length="1" data-index="4"><a href="https://subscription.sfchronicle.com/checkout/1223/2586?siteID=SFC&origin=hamburger" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-5513" data-naveid="5513" data-hdn-analytics="visit|Subscribe|navigation-ard|4">Subscribe</a></li><li class="parent topLevel" data-length="8" data-index="5"><span role="heading" aria-level="2"><a  href="https://www.hearst.com/newspapers/san-francisco-chronicle" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-5914" data-naveid="5914" data-hdn-analytics="visit|About Us|navigation-ard|6">About Us</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 176px"><li class="child"><a  href="/about/newsroomnews/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5915" data-naveid="5915" data-hdn-analytics="visit|About Us-Newsroom News|navigation-ard|1">Newsroom News</a></li><li class="child"><a  href="https://sfchronicle.myshopify.com/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4117" data-naveid="4117" data-hdn-analytics="visit|About Us-Chronicle Store|navigation-ard|2">Chronicle Store</a></li><li class="child"><a  href="https://seasonofsharing.org/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5525" data-naveid="5525" data-hdn-analytics="visit|About Us-Season of Sharing|navigation-ard|3">Season of Sharing</a></li><li class="child"><a  href="https://www.sfchronicle.com/terms_of_use/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4562" data-naveid="4562" data-hdn-analytics="visit|About Us-Terms of Use|navigation-ard|4">Terms of Use</a></li><li class="child"><a  href="https://www.sfchronicle.com/privacy_policy/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4561" data-naveid="4561" data-hdn-analytics="visit|About Us-Privacy Notice|navigation-ard|5">Privacy Notice</a></li><li class="child"><a  href="/mydata/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5431" data-naveid="5431" data-hdn-analytics="visit|About Us-Your Privacy Choices|navigation-ard|6">Your Privacy Choices</a></li><li class="child"><a  href="https://marketing.sfgate.com/advertise-with-us-today?utm_source=sfchronicle" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5895" data-naveid="5895" data-hdn-analytics="visit|About Us-Advertise With Us|navigation-ard|7">Advertise With Us</a></li></ul></li><li class="parent topLevel" data-length="11" data-index="6"><span role="heading" aria-level="2"><a  href="/bayarea/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1355" data-naveid="1355" data-hdn-analytics="visit|Bay Area|navigation-ard|7">Bay Area</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 220px"><li class="child"><a  href="https://www.sfchronicle.com/goldengatepark/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6028" data-naveid="6028" data-hdn-analytics="visit|Bay Area-Golden Gate Park|navigation-ard|1">Golden Gate Park</a></li><li class="child"><a  href="https://www.sfchronicle.com/transit/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5977" data-naveid="5977" data-hdn-analytics="visit|Bay Area-Transit|navigation-ard|2">Transit</a></li><li class="child"><a  href="/crime/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1400" data-naveid="1400" data-hdn-analytics="visit|Bay Area-Crime|navigation-ard|3">Crime</a></li><li class="child"><a  href="https://www.sfchronicle.com/sf/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3168" data-naveid="3168" data-hdn-analytics="visit|Bay Area-San Francisco|navigation-ard|4">San Francisco</a></li><li class="child"><a  href="https://www.sfchronicle.com/coronavirus/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5467" data-naveid="5467" data-hdn-analytics="visit|Bay Area-COVID-19|navigation-ard|5">COVID-19</a></li><li class="child"><a  href="/health/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3167" data-naveid="3167" data-hdn-analytics="visit|Bay Area-Health|navigation-ard|6">Health</a></li><li class="child"><a  href="https://www.sfchronicle.com/bayareahousingcrisis/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5970" data-naveid="5970" data-hdn-analytics="visit|Bay Area-Housing Crisis|navigation-ard|7">Housing Crisis</a></li><li class="child"><a  href="/data/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5916" data-naveid="5916" data-hdn-analytics="visit|Bay Area-Data|navigation-ard|8">Data</a></li><li class="child"><a  href="https://www.sfchronicle.com/pge/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5976" data-naveid="5976" data-hdn-analytics="visit|Bay Area-PG&E|navigation-ard|9">PG&E</a></li><li class="child"><a  href="https://projects.sfchronicle.com/sf-homeless/landing/" target="_blank" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5979" data-naveid="5979" data-hdn-analytics="visit|Bay Area-SF Homeless Project|navigation-ard|10">SF Homeless Project</a></li></ul></li><li class="parent topLevel" data-length="9" data-index="7"><span role="heading" aria-level="2"><a  href="/sports/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1358" data-naveid="1358" data-hdn-analytics="visit|Sports|navigation-ard|8">Sports</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 176px"><li class="child"><a  href="/sports/giants/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1362" data-naveid="1362" data-hdn-analytics="visit|Sports-Giants|navigation-ard|1">Giants</a></li><li class="child"><a  href="/sports/warriors/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1364" data-naveid="1364" data-hdn-analytics="visit|Sports-Warriors|navigation-ard|2">Warriors</a></li><li class="child"><a  href="/sports/49ers/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1360" data-naveid="1360" data-hdn-analytics="visit|Sports-49ers|navigation-ard|3">49ers</a></li><li class="child"><a  href="/sports/athletics/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1363" data-naveid="1363" data-hdn-analytics="visit|Sports-A's|navigation-ard|4">A's</a></li><li class="child"><a  href="/sports/sharks/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1366" data-naveid="1366" data-hdn-analytics="visit|Sports-Sharks|navigation-ard|5">Sharks</a></li><li class="child"><a  href="/sports/high-school/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1369" data-naveid="1369" data-hdn-analytics="visit|Sports-High School|navigation-ard|6">High School</a></li><li class="child"><a  href="https://www.sfchronicle.com/womens-sports/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6284" data-naveid="6284" data-hdn-analytics="visit|Sports-Women's Sports|navigation-ard|7">Women's Sports</a></li><li class="child"><a  href="/sports/college/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1365" data-naveid="1365" data-hdn-analytics="visit|Sports-College|navigation-ard|8">College</a></li></ul></li><li class="parent topLevel" data-length="3" data-index="8"><span role="heading" aria-level="2"><a  href="https://www.sfchronicle.com/projects/2022/fixing-san-francisco-problems/sfnext-about-the-project" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-6273" data-naveid="6273" data-hdn-analytics="visit|SFNext|navigation-ard|9">SFNext</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="https://www.sfchronicle.com/projects/2022/fixing-san-francisco-problems/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6274" data-naveid="6274" data-hdn-analytics="visit|SFNext-SFNext Index|navigation-ard|1">SFNext Index</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/podcasts/fixing-our-city" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6275" data-naveid="6275" data-hdn-analytics="visit|SFNext-Podcast: Fixing Our City|navigation-ard|2">Podcast: Fixing Our City</a></li></ul></li><li class="single" data-length="1" data-index="9"><a href="https://www.sfchronicle.com/politics/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-4208" data-naveid="4208" data-hdn-analytics="visit|Politics|navigation-ard|10">Politics</a></li><li class="single" data-length="1" data-index="10"><a href="/tech/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1407" data-naveid="1407" data-hdn-analytics="visit|Tech|navigation-ard|11">Tech</a></li><li class="parent topLevel" data-length="2" data-index="11"><span role="heading" aria-level="2"><a  href="/us-world/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1356" data-naveid="1356" data-hdn-analytics="visit|US & World|navigation-ard|12">US & World</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="/california/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6015" data-naveid="6015" data-hdn-analytics="visit|US & World-California|navigation-ard|1">California</a></li></ul></li><li class="parent topLevel" data-length="2" data-index="12"><span role="heading" aria-level="2"><a  href="/opinion/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1411" data-naveid="1411" data-hdn-analytics="visit|Opinions|navigation-ard|13">Opinions</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="https://www.sfchronicle.com/opinion/letterstotheeditor/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6287" data-naveid="6287" data-hdn-analytics="visit|Opinions-Letters to the Editor|navigation-ard|1">Letters to the Editor</a></li></ul></li><li class="parent topLevel" data-length="6" data-index="13"><span role="heading" aria-level="2"><a  href="/food/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-3157" data-naveid="3157" data-hdn-analytics="visit|Food|navigation-ard|14">Food</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 132px"><li class="child"><a  href="https://www.sfchronicle.com/projects/2023/best-sf-restaurants-bay-area/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1393" data-naveid="1393" data-hdn-analytics="visit|Food-Top Restaurants|navigation-ard|1">Top Restaurants</a></li><li class="child"><a  href="/food/restaurants/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1387" data-naveid="1387" data-hdn-analytics="visit|Food-Restaurants|navigation-ard|2">Restaurants</a></li><li class="child"><a  href="https://www.sfchronicle.com/bay-area-restaurant-closures/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6290" data-naveid="6290" data-hdn-analytics="visit|Food-Restaurant Closures|navigation-ard|3">Restaurant Closures</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/best-wineries-napa-sonoma-bay-area-wine-country/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5968" data-naveid="5968" data-hdn-analytics="visit|Food-Top Wineries|navigation-ard|4">Top Wineries</a></li><li class="child"><a  href="https://www.sfchronicle.com/food/wine/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1390" data-naveid="1390" data-hdn-analytics="visit|Food-Wine, Beer & Spirits|navigation-ard|5">Wine, Beer & Spirits</a></li></ul></li><li class="parent topLevel" data-length="3" data-index="14"><span role="heading" aria-level="2"><a  href="/culture/travel/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-3750" data-naveid="3750" data-hdn-analytics="visit|Travel|navigation-ard|15">Travel</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="https://www.sfchronicle.com/outdoors/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5966" data-naveid="5966" data-hdn-analytics="visit|Travel-Outdoors|navigation-ard|1">Outdoors</a></li><li class="child"><a  href="https://www.sfchronicle.com/tahoe/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6001" data-naveid="6001" data-hdn-analytics="visit|Travel-Tahoe|navigation-ard|2">Tahoe</a></li></ul></li><li class="single" data-length="1" data-index="15"><a href="https://www.sfchronicle.com/oursf/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-4206" data-naveid="4206" data-hdn-analytics="visit|Vault: Our S.F.|navigation-ard|16">Vault: Our S.F.</a></li><li class="parent topLevel" data-length="8" data-index="16"><span role="heading" aria-level="2"><a  href="https://www.sfchronicle.com/projects/podcasts/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-4440" data-naveid="4440" data-hdn-analytics="visit|Podcasts|navigation-ard|17">Podcasts</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 176px"><li class="child"><a  href="https://www.sfchronicle.com/projects/podcasts/the-doodler/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5850" data-naveid="5850" data-hdn-analytics="visit|Podcasts-The Doodler|navigation-ard|1">The Doodler</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/podcasts/chronicled/kamala-harris/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5967" data-naveid="5967" data-hdn-analytics="visit|Podcasts-Chronicled|navigation-ard|2">Chronicled</a></li><li class="child"><a  href="/projects/podcasts/extra-spicy" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5583" data-naveid="5583" data-hdn-analytics="visit|Podcasts-Extra Spicy|navigation-ard|3">Extra Spicy</a></li><li class="child"><a  href="/projects/podcasts/fifth-and-mission" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5584" data-naveid="5584" data-hdn-analytics="visit|Podcasts-Fifth & Mission|navigation-ard|4">Fifth & Mission</a></li><li class="child"><a  href="/projects/podcasts/total-sf" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5586" data-naveid="5586" data-hdn-analytics="visit|Podcasts-Total SF|navigation-ard|5">Total SF</a></li><li class="child"><a  href="https://www.sfchronicle.com/projects/podcasts/fixing-our-city/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-6131" data-naveid="6131" data-hdn-analytics="visit|Podcasts-Fixing Our City|navigation-ard|6">Fixing Our City</a></li><li class="child"><a  href="/projects/podcasts/its-all-political" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5585" data-naveid="5585" data-hdn-analytics="visit|Podcasts-It's All Political|navigation-ard|7">It's All Political</a></li></ul></li><li class="single" data-length="1" data-index="17"><a href="http://www.legacy.com/obituaries/sfgate/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1460" data-naveid="1460" data-hdn-analytics="visit|Obituaries|navigation-ard|18">Obituaries</a></li><li class="single" data-length="1" data-index="18"><a href="https://www.sfchronicle.com/in-depth-projects/2023/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-3419" data-naveid="3419" data-hdn-analytics="visit|In-Depth|navigation-ard|19">In-Depth</a></li><li class="parent topLevel" data-length="2" data-index="19"><span role="heading" aria-level="2"><a  href="/realestate/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-5882" data-naveid="5882" data-hdn-analytics="visit|Real Estate|navigation-ard|20">Real Estate</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="https://www.sfchronicle.com/projects/sf-bay-area-housing-where-to-live/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5883" data-naveid="5883" data-hdn-analytics="visit|Real Estate-Find a Home|navigation-ard|1">Find a Home</a></li></ul></li><li class="parent topLevel" data-length="9" data-index="20"><span role="heading" aria-level="2"><a  href="https://datebook.sfchronicle.com/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-1380" data-naveid="1380" data-hdn-analytics="visit|Datebook|navigation-ard|21">Datebook</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 176px"><li class="child"><a  href="https://datebook.sfchronicle.com/category/movies-tv" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1381" data-naveid="1381" data-hdn-analytics="visit|Datebook-Movies & TV|navigation-ard|1">Movies & TV</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/music" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1383" data-naveid="1383" data-hdn-analytics="visit|Datebook-Music|navigation-ard|2">Music</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/theater" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4583" data-naveid="4583" data-hdn-analytics="visit|Datebook-Theater|navigation-ard|3">Theater</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/art-exhibits" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1382" data-naveid="1382" data-hdn-analytics="visit|Datebook-Art & Exhibits|navigation-ard|4">Art & Exhibits</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/dance" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4584" data-naveid="4584" data-hdn-analytics="visit|Datebook-Dance|navigation-ard|5">Dance</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/classical" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4585" data-naveid="4585" data-hdn-analytics="visit|Datebook-Classical|navigation-ard|6">Classical</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/books" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-1385" data-naveid="1385" data-hdn-analytics="visit|Datebook-Books|navigation-ard|7">Books</a></li><li class="child"><a  href="https://datebook.sfchronicle.com/category/festivals" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3853" data-naveid="3853" data-hdn-analytics="visit|Datebook-Festivals|navigation-ard|8">Festivals</a></li></ul></li><li class="parent topLevel" data-length="2" data-index="21"><span role="heading" aria-level="2"><a  href="/puzzles/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-6040" data-naveid="6040" data-hdn-analytics="visit|Puzzles|navigation-ard|22">Puzzles</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 44px"><li class="child"><a  href="https://www.sfchronicle.com/comics/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-5756" data-naveid="5756" data-hdn-analytics="visit|Puzzles-Comics|navigation-ard|1">Comics</a></li></ul></li><li class="parent topLevel" data-length="8" data-index="22"><span role="heading" aria-level="2"><a  href="/membership/" class="navigation--item navigation--menu-item hdn-analytics" data-eid="navigationItem-3169" data-naveid="3169" data-hdn-analytics="visit|Membership|navigation-ard|1">Membership</a><span class="toggle navigation--item-glyph" aria-expanded="false" tabindex="0" aria-label="navigation--subMenu"></span></a></span><ul class="navigation--subMenu" id="navigation--subMenu" data-collapsed="true" style="--n: 176px"><li class="child"><a  href="http://link.sfchronicle.com/join/signup" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4563" data-naveid="4563" data-hdn-analytics="visit|Membership-Newsletters|navigation-ard|1">Newsletters</a></li><li class="child"><a  href="/membership/faq/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3170" data-naveid="3170" data-hdn-analytics="visit|Membership-About Membership|navigation-ard|2">About Membership</a></li><li class="child"><a  href="/membership/#offers" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3172" data-naveid="3172" data-hdn-analytics="visit|Membership-Exclusive offers|navigation-ard|3">Exclusive offers</a></li><li class="child"><a  href="https://subscription.sfchronicle.com/checkout/1223/2586?siteID=SFC&origin=hamburger&ipid=wcm&variant=joinnow" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3171" data-naveid="3171" data-hdn-analytics="visit|Membership-Join Now|navigation-ard|4">Join Now</a></li><li class="child"><a  href="/e-edition/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4199" data-naveid="4199" data-hdn-analytics="visit|Membership-e-edition|navigation-ard|5">e-edition</a></li><li class="child"><a  href="/mobile-apps/" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-4198" data-naveid="4198" data-hdn-analytics="visit|Membership-App|navigation-ard|6">App</a></li><li class="child"><a  href="/account" class="navigation--item navigation--subMenu-item hdn-analytics" data-eid="navigationItem-3173" data-naveid="3173" data-hdn-analytics="visit|Membership-Manage my account|navigation-ard|7">Manage my account</a></li></ul></li></ul></div></div><span class="rule"></span><div id="navToggle__page" class="navTogglePage"></div></nav>
<!-- e hearst/common/siteNavigation.tpl -->
<!-- e hearst/home/navigation.tpl --> <!-- e hearst/home/HNavigation.tpl -->    </header>

<!-- e hearst/common/siteBranding.tpl --> <main><section id="topZone" class="zone topZone"><!-- src/business/widgets/hearst/collection/widget.tpl -->

    <div class="hide-rss-link hdnce-e hdnce-collection-113360-dynamic_ribbon_articles" data-eid="collection-113360-dynamic_ribbon_articles"><!-- hearst/collections/dynamic_ribbon_articles.tpl -->
<!-- collection.dynamic_ribbon_articles.113360 -->
    <!-- design/collection/dynamic_ribbon_articles/single_zone.tpl -->
                                                                                                                                                            <div class="articleRibbon" aria-label="carousel" role="region" data-component="collection" data-type="ribbon" data-collection-id="113360" data-collection-title="Most Popular Ribbon" data-type="list">
        <button class="articleRibbon--nav-btn articleRibbon--nav-prev fade" data-delta="-1" aria-label="Previous"></button>
        <div class="articleRibbon--wrapper">
            <ul class="articleRibbon--list">
                <div class="scrollSpacer"></div>
                                <div class="articleRibbon--list-wrapper" style="flex: 1 0 2420px;">
                    <span class="articleRibbon--list-title" role="heading" aria-level="2"><span class="articleRibbon--list-label"><!-- widgets/hearst/moduleHeader/widget.tpl -->
                                            <h2 role="heading" aria-level="2">Most Popular</h2>
                        <!-- e widgets/hearst/moduleHeader/widget.tpl --></span></span>                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/bayarea/article/feds-nab-driver-passenger-hung-window-ak-47-18334999.php" data-hdn-analytics="visit-from-img|article-18334999|-113360|1">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/17/46/24181177/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/17/46/24181177/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/17/46/24181177/3/ratio1x1_100.jpg" alt="San Francisco police shared photo showing a woman holding an AK-47 while leaning out of the window of a moving car in 2021.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/bayarea/article/feds-nab-driver-passenger-hung-window-ak-47-18334999.php" data-hdn-analytics="visit|article-18334999|-113360|1" data-epe-inst="s:0;t:75" data-epe-title="1">Viral photo arrest: Feds nab Bay Area driver whose passenger hung out...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/health/article/covid-california-booster-timing-wave-variant-18336335.php" data-hdn-analytics="visit-from-img|article-18336335|-113360|2">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio1x1_100.jpg" alt="Crowds gather at Dolores Park during a summer heat wave in San Francisco, California on Saturday, July 15, 2023. The Bay Area is scheduled for elevated temperatures through the weekend.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/health/article/covid-california-booster-timing-wave-variant-18336335.php" data-hdn-analytics="visit|article-18336335|-113360|2" data-epe-inst="s:0;t:75" data-epe-title="1">New variants linked to swell in California COVID cases. Here’s when to...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/food/wine/article/napa-valley-rombauer-vineyards-sold-18336242.php" data-hdn-analytics="visit-from-img|article-18336242|-113360|3">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/17/66/24182186/7/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/17/66/24182186/7/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/17/66/24182186/7/ratio1x1_100.jpg" alt="Wines ready to be poured for tasting are seen by a table in the outdoor tasting room area of Rombauer Vineyards at the winery in St. Helena, Calif., on Monday, July 10, 2023.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/food/wine/article/napa-valley-rombauer-vineyards-sold-18336242.php" data-hdn-analytics="visit|article-18336242|-113360|3" data-epe-inst="s:0;t:75" data-epe-title="1">Napa Valley icon Rombauer Vineyards sold to wine giant</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/sf/article/pickleball-court-presidio-heights-18336716.php" data-hdn-analytics="visit-from-img|article-18336716|-113360|4">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio1x1_100.jpg" alt="Folks play pickleball on Presidio Wall pickleball courts on Friday, September 16, 2022, in San Francisco, Calif. Many devoted players to the suddenly booming sport who are fighting City Hall to stop giving so much space to tennis players and start converting some courts to pickleball.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/sf/article/pickleball-court-presidio-heights-18336716.php" data-hdn-analytics="visit|article-18336716|-113360|4" data-epe-inst="s:0;t:75" data-epe-title="1">‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/politics/article/newsom-homeless-rulings-18336300.php" data-hdn-analytics="visit-from-img|article-18336300|-113360|5">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/20/17/24183757/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/20/17/24183757/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/20/17/24183757/3/ratio1x1_100.jpg" alt="California Gov. Gavin Newsom during his statewide tour that kicked off at Cal Expo, Thursday, March 16, 2023, in Sacramento. The governor announced a plan to build approximately 1,200 tiny homes throughout the state in an attempt to reduce homelessness.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/politics/article/newsom-homeless-rulings-18336300.php" data-hdn-analytics="visit|article-18336300|-113360|5" data-epe-inst="s:0;t:75" data-epe-title="1">Exclusive: Gavin Newsom calls ban on S.F. homeless sweeps ‘preposterous’...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/sf/article/marc-benioff-dreamforce-could-leave-s-f-18337259.php" data-hdn-analytics="visit-from-img|article-18337259|-113360|6">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio1x1_100.jpg" alt="Attendees of Dreamforce walk outside the Moscone Center in San Francisco, Calif. on Monday, September 19, 2022. Dreamforce is coming back in a big way starting Sept. 20 and is poised to be the city's largest conference since the pandemic began.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/sf/article/marc-benioff-dreamforce-could-leave-s-f-18337259.php" data-hdn-analytics="visit|article-18337259|-113360|6" data-epe-inst="s:0;t:75" data-epe-title="1">Marc Benioff: Next month’s Dreamforce could be last in S.F. if it's...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/opinion/openforum/article/trump-s-mug-shot-undoubtedly-entertaining-18334576.php" data-hdn-analytics="visit-from-img|article-18334576|-113360|7">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/16/23/24175846/6/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/16/23/24175846/6/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/16/23/24175846/6/ratio1x1_100.jpg" alt="In a handout provided by the Fulton County Sheriff's Office, former President Donald Trump poses for his booking photo at the Fulton County Jail on Thursday, Aug. 24, 2023, in Atlanta Trump was booked on 13 charges related to an alleged plan to overturn the results of the 2020 presidential election in Georgia.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/opinion/openforum/article/trump-s-mug-shot-undoubtedly-entertaining-18334576.php" data-hdn-analytics="visit|article-18334576|-113360|7" data-epe-inst="s:0;t:75" data-epe-title="1">Trump’s mug shot was undoubtedly entertaining. But here’s why it’s a...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/bayarea/article/interstate-80-westbound-closure-labor-day-weekend-18336477.php" data-hdn-analytics="visit-from-img|article-18336477|-113360|8">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/20/12/24183469/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/20/12/24183469/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/20/12/24183469/3/ratio1x1_100.jpg" alt="Traffic on eastbound Interstate 80 enters the Carquinez Bridge in Crockett, Calif. on Saturday, June 27, 2020. Six people have died in three separate accidents while negotiating a curve with a protective wall only 32-inches high approaching the Carquinez Bridge on eastbound Interstate 80.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/bayarea/article/interstate-80-westbound-closure-labor-day-weekend-18336477.php" data-hdn-analytics="visit|article-18336477|-113360|8" data-epe-inst="s:0;t:75" data-epe-title="1">Major Bay Area highway closure set for Labor Day weekend — here’s what...</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/bayarea/article/solano-fairfield-new-city-investors-faq-18334384.php" data-hdn-analytics="visit-from-img|article-18334384|-113360|9">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/15/20/24171543/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/15/20/24171543/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/15/20/24171543/3/ratio1x1_100.jpg" alt="A U.S. Air Force C-5M Super Galaxy practices runway approaches as cars drive on Branscombe Road in the farmland around Travis Air Force Base near Fairfield, Calif., on Wednesday, August 23, 2023. A developer has purchased 55K acres of land near the Travis Air Force base. It's a big area, twice the size of San Francisco">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/bayarea/article/solano-fairfield-new-city-investors-faq-18334384.php" data-hdn-analytics="visit|article-18334384|-113360|9" data-epe-inst="s:0;t:75" data-epe-title="1">Maps: Here’s what we know about the new city proposed in the Bay Area</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/sports/49ers/article/steve-young-weighs-49ers-trade-qb-trey-lance-18337516.php" data-hdn-analytics="visit-from-img|article-18337516|-113360|10">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/20/51/24185430/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/20/51/24185430/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/20/51/24185430/3/ratio1x1_100.jpg" alt="San Francisco 49ers starting quarterback Trey Lance heads onto the field during their game against the Houston Texans in the first quarter at Levi's Stadium in Santa Clara, California, on Jan. 2, 2022.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/sports/49ers/article/steve-young-weighs-49ers-trade-qb-trey-lance-18337516.php" data-hdn-analytics="visit|article-18337516|-113360|10" data-epe-inst="s:0;t:75" data-epe-title="1">Steve Young weighs in on 49ers’ trade of QB Trey Lance to Dallas</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                                                    <!-- hearst/collections/dynamic_ribbon_articles_body.tpl -->
<li class="articleRibbon--list-item articleRibbon--mostPopular">
            <div class="articleRibbon--item-img">
            <a class="hdn-analytics "  href="/weather-forecast/article/bay-area-wildfire-smoke-18334266.php" data-hdn-analytics="visit-from-img|article-18334266|-113360|11">
                <picture>
                    <source srcset="https://s.hdnux.com/photos/01/34/17/45/24181103/3/ratio1x1_100.jpg 1x, https://s.hdnux.com/photos/01/34/17/45/24181103/3/ratio1x1_200.jpg 2x" media="(min-width: 48rem)">
                    <img src="https://s.hdnux.com/photos/01/34/17/45/24181103/3/ratio1x1_100.jpg" alt="Weather models predict that smoke from the Happy Camp and Smith River complex wildfires will drift into the Bay Area on Tuesday night into Wednesday morning.">
                </picture>
            </a>
        </div>
        <a class="articleRibbon--item-headline hdn-analytics " role="heading" aria-level="3"  href="/weather-forecast/article/bay-area-wildfire-smoke-18334266.php" data-hdn-analytics="visit|article-18334266|-113360|11" data-epe-inst="s:0;t:75" data-epe-title="1">Wildfire smoke is headed to the Bay Area. Here's what to expect</a></li>
<!-- e hearst/collections/dynamic_ribbon_articles_body.tpl -->                                    </div>
                <div class="scrollSpacer"></div>
            </ul>
        </div>
        <button class="articleRibbon--nav-btn articleRibbon--nav-next fade show " data-delta="1" aria-label="Next"></button>
    </div>
        <script type="text/javascript">
        var nextStory = [
                                                            {
                    "id": 18334999,
                    "headline": "Viral photo arrest: Feds nab Bay Area driver whose...",
                    "url": "/bayarea/article/feds-nab-driver-passenger-hung-window-ak-47-18334999.php",
                    "image": "https://s.hdnux.com/photos/01/34/17/46/24181177/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18336335,
                    "headline": "New variants linked to swell in California COVID...",
                    "url": "/health/article/covid-california-booster-timing-wave-variant-18336335.php",
                    "image": "https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18336242,
                    "headline": "Napa Valley icon Rombauer Vineyards sold to wine giant",
                    "url": "/food/wine/article/napa-valley-rombauer-vineyards-sold-18336242.php",
                    "image": "https://s.hdnux.com/photos/01/34/17/66/24182186/7/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18336716,
                    "headline": "‘Hypocrisy of rich’: S.F. woman trying to shut down...",
                    "url": "/sf/article/pickleball-court-presidio-heights-18336716.php",
                    "image": "https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18336300,
                    "headline": "Exclusive: Gavin Newsom calls ban on S.F. homeless...",
                    "url": "/politics/article/newsom-homeless-rulings-18336300.php",
                    "image": "https://s.hdnux.com/photos/01/34/20/17/24183757/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18337259,
                    "headline": "Marc Benioff: Next month’s Dreamforce could be last...",
                    "url": "/sf/article/marc-benioff-dreamforce-could-leave-s-f-18337259.php",
                    "image": "https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18334576,
                    "headline": "Trump’s mug shot was undoubtedly entertaining. But...",
                    "url": "/opinion/openforum/article/trump-s-mug-shot-undoubtedly-entertaining-18334576.php",
                    "image": "https://s.hdnux.com/photos/01/34/16/23/24175846/6/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18336477,
                    "headline": "Major Bay Area highway closure set for Labor Day...",
                    "url": "/bayarea/article/interstate-80-westbound-closure-labor-day-weekend-18336477.php",
                    "image": "https://s.hdnux.com/photos/01/34/20/12/24183469/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18334384,
                    "headline": "Maps: Here’s what we know about the new city...",
                    "url": "/bayarea/article/solano-fairfield-new-city-investors-faq-18334384.php",
                    "image": "https://s.hdnux.com/photos/01/34/15/20/24171543/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18337516,
                    "headline": "Steve Young weighs in on 49ers’ trade of QB Trey...",
                    "url": "/sports/49ers/article/steve-young-weighs-49ers-trade-qb-trey-lance-18337516.php",
                    "image": "https://s.hdnux.com/photos/01/34/20/51/24185430/3/ratio3x2_100.jpg"
                },                                                            {
                    "id": 18334266,
                    "headline": "Wildfire smoke is headed to the Bay Area. Here's...",
                    "url": "/weather-forecast/article/bay-area-wildfire-smoke-18334266.php",
                    "image": "https://s.hdnux.com/photos/01/34/17/45/24181103/3/ratio3x2_100.jpg"
                }                    ];
    </script>
<!-- e design/collection/dynamic_ribbon_articles/single_zone.tpl --><!-- e hearst/collections/dynamic_ribbon_articles.tpl -->
</div><!-- e src/business/widgets/hearst/collection/widget.tpl --><!-- removed by abtesting -->
</section> <div class="belowMastheadWrapper"></div> <section id="content" class="article" data-type="dtc"><!-- hearst/article/articleHeader.tpl -->
            
            
    <header class="article--header articleHeader"><div class="articleHeader--breadcrumbs"><a class="articleHeader--breadcrumbs-item" href="https://www.sfchronicle.com/bayarea/">Bay Area</a><span> // </span><a class="articleHeader--breadcrumbs-item" href="https://www.sfchronicle.com/sf/">San Francisco</a></div><h1 class="articleHeader--headline" aria-labelledby="Rich SF woman trying to end public pickleball court has one at home">‘Hypocrisy of rich’: S.F. woman trying to shut down pickleball court has one in her backyard</h1><div class="articleHeader--subHead hasPhoto"><div class="articleHeader--photo"><a href="https://www.sfchronicle.com/author/j-k-dineen/" title="J.K. Dineen" class="articleHeaderHeader--subhead-img hdn-analytics" data-hdn-analytics="visit-from-image|J.K. Dineen-Author Page|articleHeader-header|1" target="_blank" rel="noopener noreferrer"><picture><source src="https://s.hdnux.com/photos/75/73/53/16235257/5/square_small.jpg 1x, https://s.hdnux.com/photos/75/73/53/16235257/5/square_medium.jpg 2x" media="(min-width: 20rem)"><img class="articleHeaderHeader--subhead-img" srcset="https://s.hdnux.com/photos/75/73/53/16235257/5/square_small.jpg" alt="Photo of J.K. Dineen"/></picture></a></div><div class="articleHeader--byline"><a href="https://www.sfchronicle.com/author/j-k-dineen/" title="J.K. Dineen" class="articleHeader--byline-url hdn-analytics" data-hdn-analytics="visit|J.K. Dineen-Author Page|article-header|1" target="_blank" rel="noopener noreferrer">J.K. Dineen</a></div><div class="articleHeader--timestamp"><time class="articleHeader--timestamp-pubdate hasUpdate hidden-xs" datetime="2023-08-30 11:00:13">Aug. 30, 2023</time><time class="articleHeader--timestamp-update" datetime="2023-08-30 11:00:13">Updated: Aug. 30, 2023 10:20&nbsp;a.m.</time></div><div class="articleHeader--shareTools"><!-- hearst/common/shareTools.tpl -->
    
<div class="share-list comments">
    <a class="share-facebook" data-shareNetwork="facebook">Facebook</a>
    <a class="share-twitter" data-shareNetwork="twitter">Twitter</a>
    <a class="share-email" data-shareNetwork="email">Email</a>
            <div class="pipe"></div>
                    
                            <a class="share-comments" data-shareNetwork="comments" href="https://www.sfchronicle.com/sf/articleComments/pickleball-court-presidio-heights-18336716.php" onclick="document.location.href = document.location.href.replace('/article/','/articleComments/').replace('/slideshow/','/slideshowComments/'); return false;">Comments</a>
        <span class="share-count"></span>
    </div>
<!-- e hearst/common/shareTools.tpl --></div></div></header>
<!-- e hearst/article/articleHeader.tpl --><!-- hearst/common/chapterNavigation.tpl -->
        <!-- e hearst/common/chapterNavigation.tpl --><article class="article--content"><section id="articleTop" class="article--content-zone top"></section>    <!-- hearst/article/content/photo.tpl -->

<figure class=" extendFromGrid fXS fSM fMD fLG fXL">




























            
    <picture class="image" data-width="2048" data-height="1365"  style="padding-top: 67%;"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/1200x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/2400x0.jpg 2x" media="(min-width: 1292px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/1150x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/2300x0.jpg 2x" media="(min-width: 1230px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/1100x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/2200x0.jpg 2x" media="(min-width: 1168px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/1050x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/2100x0.jpg 2x" media="(min-width: 1106px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/1000x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/2000x0.jpg 2x" media="(min-width: 1044px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/950x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1900x0.jpg 2x" media="(min-width: 982px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/900x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1800x0.jpg 2x" media="(min-width: 920px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/850x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1700x0.jpg 2x" media="(min-width: 858px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/800x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1600x0.jpg 2x" media="(min-width: 796px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/750x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1500x0.jpg 2x" media="(min-width: 734px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/700x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1400x0.jpg 2x" media="(min-width: 672px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/650x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1300x0.jpg 2x" media="(min-width: 610px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/600x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1200x0.jpg 2x" media="(min-width: 548px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/550x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1100x0.jpg 2x" media="(min-width: 486px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/500x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/1000x0.jpg 2x" media="(min-width: 424px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/450x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/900x0.jpg 2x" media="(min-width: 362px)"><source srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/6/400x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/6/800x0.jpg 2x" media="(min-width: 300px)"><img class="landscape" src="https://s.hdnux.com/photos/01/34/20/43/24185034/6/1200x0.jpg" alt="The Presidio Wall pickleball courts have become a popular spot for San Francisco pickleball players. So much so that neighbors are complaining about the noise and issued a petition to stop the game."></picture><figcaption><span class="caption"><p>The Presidio Wall pickleball courts have become a popular spot for San Francisco pickleball players. So much so that neighbors are complaining about the noise and issued a petition to stop the game.</p></span><span class="credits">Yalonda M. James/The Chronicle</span></figcaption></figure>
<!-- e hearst/article/content/photo.tpl -->

            <p>As an anti-pickleball crusader, Presidio Heights resident Holly Peterson would hardly seem unusual.</p>
                <p>After all, plenty of pickleball court neighbors say they are being driven crazy by the bright <em>pock-pock-pock </em>sounds of the country’s fastest-growing sport, a sound one British Columbia couple found so <a href="https://www.washingtonpost.com/nation/2023/07/26/pickleball-hunger-strike-noise-chilliwack-canada/">annoying</a> they began a hunger strike to bring attention to their grievances.  </p>
    <div id="paywall" class="content-wrapper">    <!-- Missed: ad -->
            <p>But, in the world of No Pickleball In My Backyard protesters, Peterson stands out for one simple reason: She literally has <a href="https://www.compass.com/listing/3630-jackson-street-san-francisco-ca-94118/1317011436516674345/">a pickleball court in her backyard</a>.</p>
                <p>Last week Peterson, who owns an eight-bedroom house on Jackson Street with her venture capitalist husband Karl Peterson, initiated a petition demanding that the city’s Recreation and Park Department shut down the pickleball courts at Presidio Wall, a playground her home overlooks. </p>
        <!-- hearst/article/content/photo.tpl -->

<figure class=" extendFromGrid fXS fSM fMD fLG fXL">




























<picture class="image deferred threeTwo" data-width="2048" data-height="1365"  data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/1200x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/2400x0.jpg 2x" media="(min-width: 1292px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/1150x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/2300x0.jpg 2x" media="(min-width: 1230px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/1100x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/2200x0.jpg 2x" media="(min-width: 1168px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/1050x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/2100x0.jpg 2x" media="(min-width: 1106px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/1000x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/2000x0.jpg 2x" media="(min-width: 1044px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/950x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1900x0.jpg 2x" media="(min-width: 982px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/900x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1800x0.jpg 2x" media="(min-width: 920px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/850x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1700x0.jpg 2x" media="(min-width: 858px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/800x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1600x0.jpg 2x" media="(min-width: 796px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/750x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1500x0.jpg 2x" media="(min-width: 734px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/700x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1400x0.jpg 2x" media="(min-width: 672px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/650x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1300x0.jpg 2x" media="(min-width: 610px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/600x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1200x0.jpg 2x" media="(min-width: 548px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/550x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1100x0.jpg 2x" media="(min-width: 486px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/500x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/1000x0.jpg 2x" media="(min-width: 424px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/450x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/900x0.jpg 2x" media="(min-width: 362px)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185033/3/400x0.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185033/3/800x0.jpg 2x" media="(min-width: 300px)"><img class="landscape" data-src="https://s.hdnux.com/photos/01/34/20/43/24185033/3/1200x0.jpg" alt="Pickleball paddles rest on the court at a Presidio Wall pickleball court in San Francisco."></picture><figcaption><span class="caption"><p>Pickleball paddles rest on the court at a Presidio Wall pickleball court in San Francisco.</p></span><span class="credits">Yalonda M. James/The Chronicle</span></figcaption></figure>
<!-- e hearst/article/content/photo.tpl -->

            <p>In <a href="https://www.change.org/p/halt-pickleball-play-on-presidio-wall-courts-for-proper-environmental-impact-assessment">the petition</a>, Peterson argues the sound of yellow-plastic-ball-meets-paddle “isn’t just grating” but that it’s “altering our way of life and the wildlife of our cherished Presidio.” </p>
                <p>She and another neighbor, Mary Tesluk, demand that the city suspend all pickleball play until a full environmental study can be completed on the sport’s impact on everything from wildlife to parking.</p>
                <p>“The endless racket threatens the fragile ecosystem and our community’s prestige,” the petition reads. “This isn’t just about us — it’s about preserving nature for future generations.”</p>
                <p>It didn’t take long for pickleball partisans on Reddit to link to a Wall Street Journal article from May focused on <a href="https://www.wsj.com/articles/a-venture-capitalists-106-year-old-mansion-asks-36-million-in-san-francisco-8012ae69">the Julia Morgan-designed Jackson Street home</a> the Petersons currently have on the market for $36 million. The article delves into the attributes of the 11,300 square foot Tudor-style home: its views of the Golden Gate Bridge, and ceiling moldings and fireplaces.</p>
        <!-- Missed: ad -->
            <p>And then there is the karaoke room with disco ball and wet bar — which of course happens to open onto an outdoor pickleball court.</p>
        <!-- hearst/article/content/relatedStories.tpl -->
    <section class="relatedStories" data-progressive="true"><div class="relatedStories--title articleModule"><div class="articleModule--title h4" role="heading" aria-level="2">More for you</div></div><ul class="relatedStories--list" data-total="2"><li class="relatedStories--item" data-number="1"><div class="slide" data-number="1"><a href="https://www.sfchronicle.com/bayarea/article/pickleball-center-nixed-east-bay-18289756.php" class="hdn-analytics"data-hdn-analytics="related_stories|article-18289756|article-18336716|1"><div class="slide--headline"><div class="slide--headline-title">Regulators nix plan to build pickleball center in East Bay; proponents hope to change their minds</div></div><div class="slide--image fullBleed"><picture class="deferred threeTwo" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/02/63/24128715/3/ratio3x2_350.jpg 1x, https://s.hdnux.com/photos/01/34/02/63/24128715/3/ratio3x2_700.jpg 2x"><img data-src="https://s.hdnux.com/photos/01/34/02/63/24128715/3/ratio3x2_700.jpg" alt=""></picture></div></a></div></li><li class="relatedStories--item" data-number="2"><div class="slide" data-number="2"><a href="https://www.sfchronicle.com/bayarea/article/pickleball-craneway-pavilion-richmond-18201808.php" class="hdn-analytics"data-hdn-analytics="related_stories|article-18201808|article-18336716|2"><div class="slide--headline"><div class="slide--headline-title">This Bay Area city could become a pickleball mecca with a planned waterside sports club</div></div><div class="slide--image fullBleed"><picture class="deferred threeTwo" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/33/61/70/24059403/3/ratio3x2_350.jpg 1x, https://s.hdnux.com/photos/01/33/61/70/24059403/3/ratio3x2_700.jpg 2x"><img data-src="https://s.hdnux.com/photos/01/33/61/70/24059403/3/ratio3x2_700.jpg" alt=""></picture></div></a></div></li></ul></section>
     <!-- e hearst/article/content/relatedStories.tpl -->            <p>San Francisco pickleball proponent Hans Carter, who has lobbied for more courts across the city, said he was shocked when he learned that the person trying to shut down San Francisco’s busiest public courts had her own private court on which to play at her leisure. </p>
                <p>“We were just rolling on the floor,” he said. “Talk about the hypocrisy of the rich.”</p>
                <p>Recreation and Park Director Phil Ginsburg, who has spent much of the past few years attempting to meet San Francisco’s seemingly insatiable hunger for pickleball, said he was aware of the petition — and of the fact that the petitioner has her own court.</p>
                <p>“Not everyone can afford a pickleball court in their backyard,” he said. “That’s why it’s nice to have them in public parks.”</p>
                <p>The dispute comes as the city scrambles to accommodate the sport’s explosive growth. San Francisco has six dedicated courts at Louis Sutter Playground, five at the Goldman Tennis Center and more scattered around the city in tennis courts, like Presidio Wall, that are lined for pickleball and have designated times for play.</p>
                <p>Construction has also started on eight courts that will replace a basketball court at Larsen Playground on 19th Avenue.  </p>
                <p>At Presidio Wall, two of the tennis courts are now dedicated for pickleball — two tennis courts have enough space for six pickle courts —  and the two other tennis courts are also reserved for pickleball on Saturdays and other times. On Saturdays, the 12 courts regularly draw 100 players.</p>
        <!-- Missed: ad -->
<aside class="article--content-inline"><aside class="zone"></aside></aside>            <p>“It’s the hub,” said Carter. “It’s just packed. The numbers have exploded. So many Millennials and Gen-Xers show up. We have been asking for overflow for two years.”</p>
                <p>The petition claims that a “flood of pickleball fanatics” is choking Presidio Trust “slow streets” and that the frenzy of pickleball activity has depressed real estate in the neighborhood.  </p>
                <p>“Home values within a 500-foot radius are sinking, deterred by the unyielding noise. This isn’t just a hit to homeowners; it’s a blow to our local economy,” it states. “Let’s halt the noise, protect our wildlife, and secure our property values.”</p>
                <p>Karl Peterson referred questions to Holly Peterson, who didn’t return a call by press time. In the Wall Street Journal story in May, the Petersons said they bought the home in 2007 for $16.65 million, invested $10 million in renovations and decided to sell it because their teenage children are in boarding school and they have another property in the city, as well as homes in Aspen, Colo., and Indiana. </p>
                <p>Realtor Gregg Lynn, who has toured the house with prospective buyers, said he has heard nothing but positive feedback on the house. </p>
                <p>“It is exceptional, one of the largest homes in the city,” he said. “It has cultural and architectural heritage as a Julia Morgan masterpiece. It’s been fully renovated in a very tasteful way.”</p>
                <p>He said his clients were not players but that they “admired and appreciated the pickleball court.”</p>
        <!-- Missed: ad -->
            <p class="cci_endnote_contact" title="CCI End Note Contact">Reach J.K. Dineen: jdineen@sfchronicle.com</p>
    <section id="articleBottom" class="article--content-zone bottom"></section></div></article><!-- hearst/article/articleAside.tpl -->
<aside class="article--aside slideshow--aside">
    <aside id="zoneD" class="zone">    
                        <!-- business/templates/design/item/default.tpl -->
    <!-- mid:freeform.97529 -->
    <div class="hst-freeform hdnce-e hdnce-item-97529">
                <section class="core-package corePackage video">
    <div class="collectionHeader">
        <span><a href="https://www.sfchronicle.com/projects/podcasts/fifth-and-mission/" target="_blank">Fifth &amp; Mission</a></span>
    </div>
    <ul class="corePackage--items corePackage--items-1 three wide">

                <span class="corePackage--item-abstract">
                    <span class="abstract">
The Chronicle’s flagship news podcast. <a href="https://podfollow.com/fifth/view" target="_blank"><strong>Listen and subscribe on your favorite app.</strong></a> Click the player below for the latest episode.</span>
                </span>
            


        <li class="corePackage--item" style="padding-top:10px">
            <div class="corePackage--item-group">
<script src="//projects.sfchronicle.com/shared/js/responsive-frame.js"></script><script src="//projects.sfchronicle.com/tools/podcast-embed/targeting.js"></script><iframe is="responsive-iframe" interval="0" src="//projects.sfchronicle.com/tools/podcast-embed/player-long.html?show=fifth"></iframe>
            </div>
        </li>

</ul></section>


<style>
 .yt-mobile { display: none; }
 .yt-site { display: block; }

@media only screen and (max-width: 600px) {

 .yt-mobile { display: block; }
 .yt-site { display: none; }

  }

.collectionHeader {
    color: #222;
    font-family: National Bold;
    font-size: 20px;
    line-height: 1;
    text-transform: none;
    margin: 20px 0px 10px 0px;
    padding: 10px 0px 0px 0px;
    border-top: 3px solid #2cb9bf;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.zone.right .core-package.video .timestamp {
    margin-bottom: 6px;
}

.core-package.video .timestamp {
    color: #222;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 10px;
}
.corePackage .timestamp {
    display: block;
    margin-bottom: 6px;
}
.timestamp {
    color: #ccc;
    font-family: National Book,system-ui;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.zone.right .core-package.video .corePackage--item-header {
    font-size: 18px;
    line-height: 1.2;
}
.core-package.video .corePackage--item-header {
    font-size: 19px;
    line-height: 1.2;
font-family: Tiempos Headline,"system serif";
font-weight: 600;
}
@media (min-width: 768px)
.corePackage--items-1 .corePackage--item-header {
    font-size: 28px;
    line-height: 1.2;
}
.corePackage--items-1 .corePackage--item-header {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    font-size: 22px;
    line-height: 1.2;
}
.corePackage--item-header {
font-family: Tiempos Headline Light,"system serif";
    font-size: 18px;
    line-height: 1.2;
    grid-area: header;
    margin-bottom: 5px;
    width: 100%;
}

.abstract {
    color: #444;
    font-family: National Book,system-ui;
    font-size: 16px;
    line-height: 1.2;
    display: block;
}
</style>
    </div>
            </aside>
    <aside id="zoneC" class="zone"></aside>
</aside>
<!-- e hearst/article/articleAside.tpl --><!-- hearst/article/articleFooter.tpl -->
<footer class="article--footer"><!-- hearst/common/author_body.tpl -->
     
        <div class="articleFooter">
                                <div class="articleFooter--author">
                                    <a href="https://www.sfchronicle.com/author/j-k-dineen/" title="J.K. Dineen" class="articleFooter--author-image hdn-analytics" data-hdn-analytics="visit-from-image|J.K. Dineen-Author Page|article-footer|1" target="_blank" rel="noopener noreferrer">
                    <picture>
                        <source srcset="https://s.hdnux.com/photos/75/73/53/16235257/5/square_small.jpg 1x, https://s.hdnux.com/photos/75/73/53/16235257/5/square_medium.jpg 2x" media="(min-width: 20rem)">
                        <img class="articleFooter--subhead-img" src="https://s.hdnux.com/photos/75/73/53/16235257/5/square_small.jpg" alt="Photo of J.K. Dineen"/>
                    </picture>
                </a>
                            <div class="articleFooter--author-label">Written By </div>                    <a href="https://www.sfchronicle.com/author/j-k-dineen/" title="J.K. Dineen" class="articleFooter--author-name hdn-analytics" data-hdn-analytics="visit|J.K. Dineen-Author Page|article-footer|1" target="_blank" rel="noopener noreferrer">J.K. Dineen</a>
                </div>
                    <div class="articleFooter--author articleFooter--social">
                <div class="articleFooter--social-label">Reach J.K. on</div>
                <a class="articleFooter--social-facebook" href="https://www.facebook.com/SFChronicle/"></a>                <a class="articleFooter--social-twitter" href="https://twitter.com/sfjkdineen"></a>                            </div>
                <div class="articleFooter--bio"><p>J.K. Dineen covers housing and real estate development. He joined The Chronicle in 2014 covering San Francisco land use politics for the City Hall team. He has since expanded his focus to explore housing and development issues throughout Northern California. He is the author of two books: "Here Tomorrow" (Heyday, 2013) and "High Spirits" (Heyday, 2015).
</p></div>    </div>
<!-- e hearst/common/author_body.tpl --><section class="article--comments"><button id="commentsButton" data-link="https://www.sfchronicle.com/sf/articleComments/pickleball-court-presidio-heights-18336716.php" onclick="document.location.href = 'https://www.sfchronicle.com/sf/articleComments/pickleball-court-presidio-heights-18336716.php'; return false;">View Comments</button></section></footer>
<!-- e hearst/article/articleFooter.tpl --></section><section id="bottomZone" class="zone bottomZone lock"><!-- src/business/widgets/hearst/collection/widget.tpl -->

    <div class="hide-rss-link hdnce-e hdnce-collection-113361-dynamic_package" data-eid="collection-113361-dynamic_package"><!-- hearst/collections/dynamic_package.tpl -->
<!-- collection.dynamic_package.113361 -->
   <!-- design/collection/dynamic_package/single_zone.tpl  -->
    <section class="core-package corePackage topics x24hrsale ">
                    <div class="corePackage--header header collectionHeader">
                <span><!-- widgets/hearst/moduleHeader/widget.tpl -->
                                            <h2 role="heading" aria-level="2">Top of the News</h2>
                        <!-- e widgets/hearst/moduleHeader/widget.tpl --></span>
            </div>
                <!-- ux hearst/collections/dynamic_package_body.tpl -->
  
        <!-- hearst/collections/dynamic_package_body_topic.tpl -->
        <ul class="corePackage--items corePackage--items-5"><li class="corePackage--item primary" role="group" aria-label="article" data-progressive="true" data-component="photo"><div class="corePackage--item-group" role="group" aria-label="article"><div class="corePackage--item-img"><a class="hdn-analytics "  href="/sf/article/pickleball-court-presidio-heights-18336716.php" data-hdn-analytics="visit-from-img|article-18336716|core_package-113361|1"><picture class="deferred threeTwo" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_550.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_1100.jpg 2x" media="(min-width: 58rem)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_675.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_1350.jpg 2x" media="(min-width: 48rem)"><source data-srcset="https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_900.jpg 1x, https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_1800.jpg 2x" media="(max-width: 48rem) and (orientation: portrait)"><img data-src="https://s.hdnux.com/photos/01/34/20/43/24185034/3/ratio3x2_900.jpg" alt="Folks play pickleball on Presidio Wall pickleball courts on Friday, September 16, 2022, in San Francisco, Calif. Many devoted players to the suddenly booming sport who are fighting City Hall to stop giving so much space to tennis players and start converting some courts to pickleball."></picture></a></div><div class="corePackage--item-cover"><a class="hdn-analytics " role="heading" aria-level="3"  href="/sf/article/pickleball-court-presidio-heights-18336716.php" data-hdn-analytics="visit|article-18336716|core_package-113361|1"><div class="corePackage--item-header  badge"><div class="hdn-analytics " data-epe-inst="s:0;t:75" data-epe-title="1">Pickleball NIMBY: Woman trying to shut down S.F. court has one in backyard</div></div></a><span class="corePackage--item-abstract"><div class="abstract" data-epe-inst="s:0;t:200" data-epe-blurb="1">In the world of No Pickleball In My Backyard protesters, Holly Peterson stands out for one simple reason: She has a pickleball court in her backyard.</div></span></div><div class="corePackage--item-kicker kicker"><span class="author">By J.K. Dineen</span></div><div class="corePackage--item-timestamp"><!-- subitem_timestamp.tpl -->
<!-- e subitem_timestamp.tpl --></div></div><li class="corePackage--item secondary" data-progressive="true" data-component="photo"><div class="corePackage--item-group" role="group" aria-label="article"><div class="corePackage--item-img"><a class="hdn-analytics "  href="/weather-forecast/article/bay-area-smoke-18336442.php" data-hdn-analytics="visit-from-img|article-18336442|core_package-113361|2"><picture class="deferred oneOne" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/20/57/24185838/3/ratio1x1_200.jpg 1x, https://s.hdnux.com/photos/01/34/20/57/24185838/3/ratio1x1_375.jpg 2x"><img data-src="https://s.hdnux.com/photos/01/34/20/57/24185838/3/ratio1x1_375.jpg" alt="High temperature forecast for the Bay Area on Wednesday, August 30."></picture></a></div><div class="corePackage--item-header  badge" role="heading" aria-level="3"><a class="hdn-analytics "  href="/weather-forecast/article/bay-area-smoke-18336442.php" data-hdn-analytics="visit|article-18336442|core_package-113361|2" data-epe-inst="s:0;t:75" data-epe-title="1">Bay Area weather will be smoky and hot today. Here's how long it will last</a></div><div class="corePackage--item-kicker kicker"><span class="author">By Anthony Edwards</span></div><div class="corePackage--item-timestamp"><!-- subitem_timestamp.tpl -->
<!-- e subitem_timestamp.tpl --></div></div><div class="corePackage--item-group" role="group" aria-label="article"><div class="corePackage--item-img"><a class="hdn-analytics "  href="/health/article/covid-california-booster-timing-wave-variant-18336335.php" data-hdn-analytics="visit-from-img|article-18336335|core_package-113361|3"><picture class="deferred oneOne" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio1x1_200.jpg 1x, https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio1x1_375.jpg 2x"><img data-src="https://s.hdnux.com/photos/01/34/20/17/24183760/3/ratio1x1_375.jpg" alt="Crowds gather at Dolores Park during a summer heat wave in San Francisco, California on Saturday, July 15, 2023. The Bay Area is scheduled for elevated temperatures through the weekend."></picture></a></div><div class="corePackage--item-header  badge" role="heading" aria-level="3"><a class="hdn-analytics "  href="/health/article/covid-california-booster-timing-wave-variant-18336335.php" data-hdn-analytics="visit|article-18336335|core_package-113361|3" data-epe-inst="s:0;t:75" data-epe-title="1">New variants linked to swell in COVID. Here’s when to get next booster</a></div><div class="corePackage--item-kicker kicker"><span class="author">By Aidin Vaziri</span></div><div class="corePackage--item-timestamp"><!-- subitem_timestamp.tpl -->
<!-- e subitem_timestamp.tpl --></div></div><div class="corePackage--item-group" role="group" aria-label="article"><div class="corePackage--item-img"><a class="hdn-analytics "  href="/vault/article/sf-car-break-in-crisis-18329461.php" data-hdn-analytics="visit-from-img|article-18329461|core_package-113361|4"><picture class="deferred oneOne" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/20/34/24184611/3/ratio1x1_200.jpg 1x, https://s.hdnux.com/photos/01/34/20/34/24184611/3/ratio1x1_375.jpg 2x"><img data-src="https://s.hdnux.com/photos/01/34/20/34/24184611/3/ratio1x1_375.jpg" alt="A San Francisco Chronicle headline from Dec. 1, 1918, explained a car break-in epidemic in the early years of automobile travel in the city."></picture></a></div><div class="corePackage--item-header  badge" role="heading" aria-level="3"><a class="hdn-analytics "  href="/vault/article/sf-car-break-in-crisis-18329461.php" data-hdn-analytics="visit|article-18329461|core_package-113361|4" data-epe-inst="s:0;t:75" data-epe-title="1">S.F.'s first car break-in crisis happened in 1918. Here’s how it ended</a></div><div class="corePackage--item-kicker kicker"><span class="author">By Peter Hartlaub</span></div><div class="corePackage--item-timestamp"><!-- subitem_timestamp.tpl -->
<!-- e subitem_timestamp.tpl --></div></div><div class="corePackage--item-group" role="group" aria-label="article"><div class="corePackage--item-img"><a class="hdn-analytics "  href="/sf/article/marc-benioff-dreamforce-could-leave-s-f-18337259.php" data-hdn-analytics="visit-from-img|article-18337259|core_package-113361|5"><picture class="deferred oneOne" data-progressive="true" data-component="picture"><source data-srcset="https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio1x1_200.jpg 1x, https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio1x1_375.jpg 2x"><img data-src="https://s.hdnux.com/photos/01/34/20/40/24184895/3/ratio1x1_375.jpg" alt="Attendees of Dreamforce walk outside the Moscone Center in San Francisco, Calif. on Monday, September 19, 2022. Dreamforce is coming back in a big way starting Sept. 20 and is poised to be the city's largest conference since the pandemic began."></picture></a></div><div class="corePackage--item-header  badge" role="heading" aria-level="3"><a class="hdn-analytics "  href="/sf/article/marc-benioff-dreamforce-could-leave-s-f-18337259.php" data-hdn-analytics="visit|article-18337259|core_package-113361|5" data-epe-inst="s:0;t:75" data-epe-title="1">Next Dreamforce could be S.F.'s last if affected by homelessness, drug use</a></div><div class="corePackage--item-kicker kicker"><span class="author">By Roland Li,&nbsp;Kevin Fagan</span></div><div class="corePackage--item-timestamp"><!-- subitem_timestamp.tpl -->
<!-- e subitem_timestamp.tpl --></div></div></li></ul>
<!-- e ux hearst/collections/dynamic_package_body_topic.tpl --><!-- e ux hearst/collections/dynamic_package_body.tpl -->
    </section>
<!-- e design/collection/dynamic_package/single_zone.tpl  --><!-- e hearst/collections/dynamic_package.tpl -->
</div><!-- e src/business/widgets/hearst/collection/widget.tpl --><div class="taboola-skip-wrapper"><div id="taboola-skip"></div></div></section></main><!-- hearst/common/siteFooter.tpl -->
    <footer class="pageFooter">
    <div class="lock">
        <div class="pageFooter--wrapper">
            <div class="pageFooter--left">
                <a href="/">
                    <img class="pageFooter--left-logo" src="/img/logos/black/logo.svg" alt="San Francisco Chronicle Homepage - Site Logo">
                </a>
                <ul class="pageFooter--left-social">
                    <li class="facebook"><a href="https://www.facebook.com/SFChronicle/" aria-label="facebook"></a></li>                    <li class="twitter"><a href="https://twitter.com/sfchronicle" aria-label="twitter"></a></li>                    <li class="instagram"><a href="https://www.instagram.com/sfchronicle/" aria-label="instagram"></a></li>                    <li class="linkedin"><a href="https://www.linkedin.com/company/sfchronicle" aria-label="linkedin"></a></li>                </ul>
            </div>
            <div class="pageFooter--right">
                <div class="pageFooter--right-topLine">
                    <a href="#content" class="return"><span class="full">Return to</span> Top</a>
                </div>
                <div class="pageFooter--right-links">
                    
                    <!-- hearst/item/standalone.tpl -->
<div class="hdnce-e hdnce-item-87230"><!-- mid:freeform.87230 -->
<ul class="wrapper">
  <li>
    <div class="title" role="heading" aria-level="2">About</div>
    <ul class="section" role="list" aria-labelledby="about-footer">
      <li><a href="http://www.hearst.com/newspapers/san-francisco-chronicle" target="_blank" role="listitem">Our Company</a></li>
      <li><a href="https://www.sfchronicle.com/terms_of_use/" target="_blank" role="listitem">Terms of Use</a></li>
      <li><a href="https://www.sfchronicle.com/privacy_policy" target="_blank" role="listitem">Privacy Notice</a></li>
      <li><a href="https://www.sfchronicle.com/privacy_policy/#caprivacyrights" target="_blank" role="listitem">CA Notice at Collection</a></li>
      <li><a href="https://www.sfchronicle.com/privacy_policy/#shinethelight" target="_blank" role="listitem">Your CA Privacy Rights (Shine the Light)</a></li>
      <li><a class="adChoices" href="https://www.sfchronicle.com/privacy_policy/#daaoptout" target="_blank" role="listitem">DAA Industry Opt Out</a></li>
      <li><a href="https://eevd.fa.us6.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_11007" target="_blank" role="listitem">Careers</a></li>
      <li><a href="https://marketing.sfgate.com/advertise-with-us-today" target="_blank" role="listitem">Advertising</a></li>
    </ul>
  </li>


<li>
    <div class="title" role="heading" aria-level="2">Newsroom</div>
    <ul class="section" role="list" aria-labelledby="news-footer">
      <li><a href="/standards">Ethics Policy</a></li>
           <li><a href="/ai_use/">Our Use of AI</a></li>
          <li><a href="https://www.sfchronicle.com/opinion/article/How-The-Chronicle-s-endorsement-process-works-14499467.php" target="_blank" role="listitem">Endorsement Process</a></li>
      <li><a href="https://newstips.sfchronicle.com/" target="_blank" role="listitem">News Tips</a></li>
  <li><a href="https://www.sfchronicle.com/about/newsroomnews/" target="_blank" role="listitem">Newsroom News</a></li>
    </ul>
  </li>


  <li>
    <div class="title" role="heading" aria-level="2">Contact</div>
    <ul class="section" role="list" aria-labelledby="contact-footer">
      <li><a href="https://www.sfchronicle.com/customer_service" target="_blank" role="listitem">Customer Service</a></li>
      <li><a href="https://www.sfchronicle.com/faq" target="_blank" role="listitem">FAQ</a></li>
      <li><a href="https://www.sfchronicle.com/newsroom_contacts" target="_blank" role="listitem">Newsroom Contacts</a></li>
    </ul>
  </li>

<li>
    <div class="title" role="heading" aria-level="2">Services</div>
    <ul class="section" role="list" aria-labelledby="services-footer">
      <li><a href="https://subscription.sfchronicle.com/" target="_blank" role="listitem">Subscriber Services</a></li>
      <li><a href="https://www.sfchronicle.com/e-edition" target="_blank" role="listitem">e-Edition</a></li>
<li><a href="https://www.parsintl.com/publication/sfchronicle/" target="_blank" role="listitem">Reprints &amp; Permissions</a></li>
<li><a href="https://www.sfchronicle.com/corporatesubscriptions/" target="_blank" role="listitem">Corporate Subscriptions</a></li>
      <li><a href="https://www.sfchronicle.com/mobile-apps/" target="_blank" role="listitem">App</a></li>
      <li><a href="https://www.sfchronicle.com/archive/search/subscriber/" target="_blank" role="listitem">Archives</a></li>
      <li><a href="https://www.sfchronicle.com/membership" target="_blank" role="listitem">Membership</a></li>
<li><a href="https://ezads.sfchron.com/sf-adportal/obits/" target="_blank" role="listitem">Place an Obituary</a></li>
      <li><a href="https://sfchronicle.myshopify.com/" target="_blank" role="listitem">Store</a></li>
      <li><a href="https://subscription.sfchronicle.com/checkout/1223/2586?siteID=SFC&amp;origin=footer" target="_blank" role="listitem">Subscription Offers</a></li>
      <li><a href="https://www.sfgate.com/" target="_blank" role="listitem">sfgate.com</a></li>
    </ul>
  </li>
</ul>

<div class="large-footer-link"><a href="https://www.sfchronicle.com/mydata/" target="_blank" role="listitem">Your Privacy Choices (Opt Out of Sale/Targeted Ads)</a></div>

<script>
$(".wrapper > li").css("flex","0 0 25% !important");
</script>

<style>
.wrapper > li {
flex: 0 0 20% !important;
}
.pageFooter--right-links .large-footer-link {
  margin: 7px 0 23px 0;
  clear: both;
  float: none;
  text-align: left;
}
.pageFooter--right-links .large-footer-link a {
    font-size: 14px;
    font-family: "National Medium", system-ui;
    white-space: nowrap;
    border: 1px solid;
    padding: 8px 10px;
}
@media screen and (min-width: 768px){
.pageFooter--right-links .large-footer-link {
  margin: 7px 0 7px;
}
}
</style>
</div><!-- / hdnce-e -->                </div>
            </div>
        </div>
        <div class="pageFooter--branding">
            <img class="pageFooter--branding-logo" src="/img/core/hearst_newspapers_logo.svg" alt="HEARST newspapers logo" />
            <span class="pageFooter--branding-copyright">&copy;2023 Hearst Communications, Inc.</span>
        </div>
    </div>
                        <!-- hearst/common/spotImFooterJS.tpl -->
<script>
                                    
            if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                if (HDN && HDN.hasOwnProperty('spotim')) {
                    HDN.spotim.launch('premium',false);
                }
            } else {
                document.addEventListener("DOMContentLoaded", function() { 
                    if (HDN && HDN.hasOwnProperty('spotim')) {
                        HDN.spotim.launch('premium',false);
                    }
                });
            }
            
                
        if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
            if (HDN && HDN.hasOwnProperty('spotim')) {
                HDN.spotim.commentCount(undefined,undefined,1);
            }
        } else {
            document.addEventListener("DOMContentLoaded", function() { 
                        if (HDN && HDN.hasOwnProperty('spotim')) {
                            HDN.spotim.commentCount(undefined,undefined,1);
                        }
                    });
        }
    
</script>
<!-- e hearst/common/spotImFooterJS.tpl -->
                            
                <script type="text/javascript">
                    window._taboola = window._taboola || [];
                    _taboola.push({flush: true});
                </script>
            
                    </footer>
<!-- e hearst/common/siteFooter.tpl -->
<!-- e hearst/article/types/dynamic_two_column.tpl --><!-- e design/article/dynamic_two_column.tpl -->                            </body>
</html>
<!-- e hearst/article/articleMain.tpl --><!-- e hearst/article/article_main.tpl --></div>`;
