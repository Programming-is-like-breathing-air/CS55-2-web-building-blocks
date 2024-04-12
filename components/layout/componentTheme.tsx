import React from "react";
import CodeTabs from "./components/codeTabs";
import useIsMobile from "./helper/mobileDetect";
import { Separator } from "@/components/ui/separator";
import { TABS_WPR_CLASS, TABS_CTNT_CLASS } from "./constants/strings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DesktopCardComponent from "../../public/components/card/normal/desktop/page"

import AccordionButton from "../../public/components/accordion/button/react/page";
import AccordionDemo from "../../public/components/accordion/normal/react/page";
import AccordionPictureButton from "../../public/components/accordion/picture/react/page";
import AccordionMix from "../../public/components/accordion/mix/react/page";
import AccordionList from "../../public/components/accordion/list/react/page";
import AccordionListAvatar from "../../public/components/accordion/listAvatar/react/page";

// Rewrite Tooltip
import NormalTagComponent from "../../public/components/tags/normal/desktop/page";
import DesktopInnovativeTagComponent from "../../public/components/tags/innovative/desktop/page"

import NormalTagComponentMobile from "../../public/components/tags/normal/mobile/page";
import InnovativeTagComponentMobile from "../../public/components/tags/innovative/mobile/page"

import CheckboxDemo from "../../public/components/checkbox/normal/react/page";
import DropdownMenuCheckboxes from "../../public/components/dropdown/basic/react/page"
import DropdownMenuwithDividers from "../../public/components/dropdown/withDividers/react/page"
import DropdownMenuwithHeader from "../../public/components/dropdown/withHeader/react/page"
import DropdownMenuwithIcon from "../../public/components/dropdown/withIcons/react/page"
import PaginationDemo from "../../public/components/misc/pagination/react/page"
import NavigationMenuDemo from "../../public/components/navigation/Dropdown/react/page"
import SideNaviDemo from "../../public/components/navigation/sideNavi/react/page"
import TopNavigationBar from "../../public/components/navigation/topNavi/react/page"
import BasicSlider from "../../public/components/slide/basic/react/page"
import TableDemo from "../../public/components/table/normal/react/page"

import { BasicTooltip } from "../../public/components/tooltip/basicTooltip/react/page";
import { LeftTooltip } from "../../public/components/tooltip/leftTooltip/react/page";
import { TopTooltip } from "../../public/components/tooltip/topTooltip/react/page";
import { BottomTooltip } from "../../public/components/tooltip/bottomTooltip/react/page";


export default function Theme({
  componentName,
  componentStyle,
  backgroundDesktop = "transparent",
  backgroundMobile = "transparent",
  componentReactView,
}: {
  componentName: string;
  componentStyle: string;
  backgroundDesktop?: string;
  backgroundMobile?: string;
  componentReactView: string;

}) {

  const isMobile = useIsMobile();
  const DESKTOP_PATH = `/components/${componentName}/${componentStyle}/desktop/`;
  const MOBILE_PATH = `/components/${componentName}/${componentStyle}/mobile/`;
  const REACT_PATH = `/components/${componentName}/${componentStyle}/react/`;

  const React_PATH = `/components/${componentName}/${componentStyle}/react/`;

  const desktopIframeRef = React.useRef(null);
  const mobileIframeRef = React.useRef(null);
  const [widthDesktop, setWidthDesktop] = React.useState<number>(500);
  const [heightDesktop, setHeightDesktop] = React.useState<number>(250);
  const [heightMobile, setHeightMobile] = React.useState<number>(250);

  const [refresh, setRefresh] = React.useState<number>(0);

  const [htmlDesktop, setHtmlDesktop] = React.useState<string | null>(null);
  const [cssDesktop, setCssDesktop] = React.useState<string | null>(null);
  const [jsDesktop, setJsDesktop] = React.useState<string | null>(null);
  const [htmlMobile, setHtmlMobile] = React.useState<string | null>(null);
  const [cssMobile, setCssMobile] = React.useState<string | null>(null);
  const [jsMobile, setJsMobile] = React.useState<string | null>(null);
  const [nextjsDesktop, setNextjsDesktop] = React.useState<string | null>(null);
  const [nextjsMobile, setNextjsMobile] = React.useState<string | null>(null);

  const componentReactMap = {
    ADemo: AccordionDemo,
    AWB: AccordionButton,
    AWPB:AccordionPictureButton,
    AM:AccordionMix,
    AL:AccordionList,
    ALA:AccordionListAvatar,

    DCC:DesktopCardComponent,
    DITC:DesktopInnovativeTagComponent,
    CheckboxDemo:CheckboxDemo,
    DropdownMenuCheckboxes:DropdownMenuCheckboxes,
    DropdownMenuwithDividers:DropdownMenuwithDividers,
    DropdownMenuwithHeader:DropdownMenuwithHeader,
    DropdownMenuwithIcon:DropdownMenuwithIcon,
    PaginationDemo:PaginationDemo,
    NavigationMenuDemo:NavigationMenuDemo,
    SideNaviDemo:SideNaviDemo,
    TopNavigationBar:TopNavigationBar,
    BasicSlider:BasicSlider,
    TableDemo:TableDemo,
    BasicTooltip:BasicTooltip,
    LeftTooltip:LeftTooltip,
    TopTooltip:TopTooltip,
    BottomTooltip:BottomTooltip,
  };

  const ReactComponent = componentReactMap[componentReactView];
  


  React.useEffect(() => {
    fetchHtmlContent();
    fetchCssContent();
    fetchJsContent();
    fetchNextjsContent();    // Hypothetical function, used to obtain Next.js related content
    getDesktopIframeBodySize();
    getMobileIframeBodySize();
  }, []);

  React.useEffect(() => {
    if (desktopIframeRef.current)
      desktopIframeRef.current.onload = getDesktopIframeBodySize;
    if (mobileIframeRef.current)
      mobileIframeRef.current.onload = getMobileIframeBodySize;
  }, [refresh]);

  const refreshIframes = () => setRefresh((prev) => prev + 1);

  const fetchHtmlContent = async () => {
    setHtmlDesktop(await fetchContent(`${DESKTOP_PATH}index.html`));
    setHtmlMobile(await fetchContent(`${MOBILE_PATH}index.html`));
  };

  const fetchCssContent = async () => {
    setCssDesktop(await fetchContent(`${DESKTOP_PATH}styles.css`));
    setCssMobile(await fetchContent(`${MOBILE_PATH}styles.css`));
  };

  const fetchJsContent = async () => {
    setJsDesktop(await fetchContent(`${DESKTOP_PATH}index.js`));
    setJsMobile(await fetchContent(`${MOBILE_PATH}index.js`));
  };

  const fetchNextjsContent = async () => {

    setNextjsDesktop(await fetchContent(`${REACT_PATH}page.tsx`)); // Adjust the path to the correct Next.js script or content path
    setNextjsMobile(await fetchContent(`${REACT_PATH}page.tsx`));


  };

  const getDesktopIframeBodySize = () => {
    if (desktopIframeRef.current) {
      const iframe = desktopIframeRef.current;
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDocument.body;

      if (iframeBody) {
        setWidthDesktop(iframeBody.offsetWidth);
        setHeightDesktop(iframeBody.offsetHeight);
      }
    }
  };

  const getMobileIframeBodySize = () => {
    if (mobileIframeRef.current) {
      const iframe = mobileIframeRef.current;
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDocument.body;
      if (iframeBody) setHeightMobile(iframeBody.offsetHeight); // Refresh height
    }
  };

  const fetchContent = async (path: string) =>
    await fetch(path).then((res) => (res.status === 200 ? res.text() : null));

    
    

  return (
    <Tabs
      defaultValue="desktop"
      onValueChange={(e) => refreshIframes()}
      className="mt-5 w-full"
    >
      <div className="w-full rounded-md border">
        <div className="h-16 flex items-center justify-center border-b">
          <TabsList className="grid grid-cols-2 w-72 md:w-96">
            {isMobile && <TabsTrigger value="mobile">Mobile</TabsTrigger>}
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            {!isMobile && <TabsTrigger value="mobile">Mobile</TabsTrigger>}
          </TabsList>
        </div>
        <TabsContent
          value="desktop"
          className={TABS_WPR_CLASS}
          style={{ backgroundColor: backgroundDesktop }}
        >
          <div className={TABS_CTNT_CLASS}>
            {ReactComponent ? <ReactComponent /> : <div>Component not found</div>}
          </div>
        </TabsContent>
        <TabsContent
          value="mobile"
          className={TABS_WPR_CLASS}
          style={{ backgroundColor: backgroundMobile }}
        >
          <div className={TABS_CTNT_CLASS}>
            {/* {MobileComponent ? <MobileComponent /> : 'Loading mobile component...'} */}

          </div>

        </TabsContent>
      </div>
      <div className="my-5">
        <p className="text-2xl font-semibold text-foreground mb-2">
          Code Usage
        </p>
        <Separator />
      </div>
      <CodeTabs
        htmlDesktop={htmlDesktop}
        cssDesktop={cssDesktop}
        jsDesktop={jsDesktop}
        nextjsDesktop={nextjsDesktop} // Add new attributes
        htmlMobile={htmlMobile}
        cssMobile={cssMobile}
        jsMobile={jsMobile}
        nextjsMobile={nextjsMobile} // Add new attributes
      />
    </Tabs>
  );
}
