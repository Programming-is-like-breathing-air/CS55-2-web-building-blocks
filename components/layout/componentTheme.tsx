import React, { useState } from "react";
import ReactCodeTabs from "./components/reactCodeTabs";
import { Separator } from "@/components/ui/separator";
import { TABS_WPR_CLASS, TABS_CTNT_CLASS } from "./constants/strings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import DesktopCardComponent from "../../public/components/card/normal/desktop/page"

import AccordionButton from "../../public/components/accordion/button/react/page";
import AccordionDemo from "../../public/components/accordion/normal/react/page";
import AccordionPictureButton from "../../public/components/accordion/picture/react/page";
import AccordionMix from "../../public/components/accordion/mix/react/page";
import AccordionList from "../../public/components/accordion/list/react/page";
import AccordionListAvatar from "../../public/components/accordion/listAvatar/react/page";


// Rewrite Tooltip

// import DesktopInnovativeTagComponent from "../../public/components/tags/innovative/desktop/page"
import CheckboxDemo from "../../public/components/checkbox/normal/react/page";
import DropdownMenuCheckboxes from "../../public/components/dropdown/basic/react/page"
import DropdownMenuwithDividers from "../../public/components/dropdown/withDividers/react/page"
import DropdownMenuwithHeader from "../../public/components/dropdown/withHeader/react/page"
import DropdownMenuwithIcon from "../../public/components/dropdown/withIcons/react/page"
import PaginationDemo from "../../public/components/misc/pagination/react/page"
import NavigationMenuDemo from "../../public/components/navigation/Dropdown/react/page"
import SideNaviDemo from "../../public/components/navigation/sideNavi/react/page"
import TopNavigationBar from "../../public/components/navigation/topNavi/react/page"
import BasicCarousel from "../../public/components/carousel/basic/react/page"
import CarouselImage from "../../public/components/carousel/withImages/react/page"
import CarouselAuto from "../../public/components/carousel/withAuto/react/page"
import CarouselCircle from "../../public/components/carousel/withSlide/react/page"
import CarouselPreview from "public/components/carousel/withPreview/react/page";
import TableDemo from "../../public/components/table/normal/react/page"
import BasicSlider from "../../public/components/slider/basic/react/page"

import { BasicTooltip } from "../../public/components/tooltip/basicTooltip/react/page";
import { LeftTooltip } from "../../public/components/tooltip/leftTooltip/react/page";
import { TopTooltip } from "../../public/components/tooltip/topTooltip/react/page";
import { BottomTooltip } from "../../public/components/tooltip/bottomTooltip/react/page";
import { DisableTooltip } from "../../public/components/tooltip/disabledTooltip/react/page";
// import { AnimatedTooltip } from "../../public/components/tooltip/animatedTooltip/react/page";
import ToastWithAction from "../../public/components/toast/action/react/page"
import ToastWithNormal from "../../public/components/toast/normal/react/page"
import ToastWithTitle from "../../public/components/toast/title/react/page"

import BreadcrumbDemo from "../../public/components/breadcrumbs/normal/react/page"
import BreadcrumbBasic from "../../public/components/breadcrumbs/noborder/react/page"

import RadioGroupForm from "../../public/components/radioGroup/completedRadioGroup/react/page"


import AlertDemo from "../../public/components/alerts/basic/react/page"
import AlertAction from "../../public/components/alerts/animation/react/page"
import AlertWithDescription from "../../public/components/alerts/withDescription/react/page"
import AlertWithList from "../../public/components/alerts/withList/react/page"
import AlertWithAction from "../../public/components/alerts/withAction/react/page"
import AlertWithBorder from "../../public/components/alerts/withBorder/react/page"
import AlertWithDismiss from "../../public/components/alerts/withDismiss/react/page"
import AlertWithLink from "../../public/components/alerts/withLink/react/page"
import TreeViewDemo from "../../public/components/misc/tree/react/page"


import TabsDemo from "../../public/components/tabs/normal/react/page"
import CardWithNormal from "public/components/card/normal/react/page"
import CardWithPicture from "public/components/card/withPic/react/page";
import CardWithPicVer from "public/components/card/verticalWithPic/react/page";
import LargeHeaderCard from "public/components/card/header/react/page";
import EnquirySubmittedCard from "public/components/card/action/react/page";
import FileUploadComponent from "public/components/fileUpload/basic/react/page";
// import FileUploadWithIcon from "public/components/fileUpload/withIcons/react/page";
// import FileUploadMutiple from "public/components/fileUpload/withMultiple/react/page";
import ImageUploadComponent from "public/components/fileUpload/withFormat/react/page";
// import FileUploadLimitSize from "public/components/fileUpload/withSize/react/page";
import FileUploadPreview from "public/components/fileUpload/withPreview/react/page";
import LoginForm from "public/components/form/loginForm/react/page";
// import SignUpForm from "public/components/form/signupForm/react/page";
import CheckoutForm from "public/components/form/checkoutForm/react/page";
import ResponsiveForm from "public/components/form/responsiveForm/react/page";
// import ContactUsForm from "public/components/form/contactusForm/react/page";
import MultiStepForm from "public/components/form/multiStepForm/react/page";

import CalendarDemo from "../../public/components/calendar/normal/react/page"
import NormalTags from "../../public/components/tags/normal/react/page"
import InnovativeTags from "../../public/components/tags/innovative/react/page"


import NormalModal from "../../public/components/modal/normal/react/page"
import PictureModal from "../../public/components/modal/withPic/react/page"
import ConfirmModal from "../../public/components/modal/confirm/react/page"
import SignupModal from "../../public/components/modal/signup/react/page";
import NoticeModal from "../../public/components/modal/notice/react/page"
import LoginModal from "../../public/components/modal/login/react/page";


import BasicSearch from "../../public/components/search/basicSearch/react/page"

// import NormalLink from "../../public/components/links/normal/react/page"
import EnhancedLink from "../../public/components/links/enhanced/react/page"
import ExpandLink from "../../public/components/links/expand/react/page"

import BrowserMockup from "../../public/components/misc/browser/react/page"

import DatePickerDemo from "../../public/components/calendar/dateInput/react/page"
import dateTimeInput from "../../public/components/calendar/dateTimeInput/react/page"
import MonthPickerDemo from "../../public/components/calendar/monthInput/react/page"
import TimePickerDemo from "../../public/components/calendar/timeInput/react/page"
import DatePickerWithRange from "../../public/components/calendar/range/react/page"
import WeekPicker from "../../public/components/calendar/weekInput/react/page"
import ButtonDemo from "../../public/components/button/normal/react/page"
import ButtonDestructive from "../../public/components/button/active1/react/page"
import ButtonLoading from "../../public/components/button/loading/react/page"
import ButtonIcon from "../../public/components/button/icon/react/page"
import ActiveButton from "../../public/components/button/active/react/page"
import FocusButton from "../../public/components/button/focus/react/page"
import HoverButton from "../../public/components/button/hover/react/page"
import TriggerButton from "../../public/components/button/successful/react/page"

import SuccessPanel from "../../public/components/panel/normal/react/page"
import FailPanel from "../../public/components/panel/fail/react/page"

import NormalChat from "../../public/components/chat/normal/react/page"
import AttachmentChat from "../../public/components/chat/attachment/react/page"
import AvatarDemo from "../../public/components/avatar/normal/react/page"
import Statisticnormal from "../../public/components/statistic/normal/react/page"
import IncardStatistic  from "public/components/statistic/Incard/react/page";
import CountdownStatistic from "public/components/statistic/Countdown/react/page"
import Watermarknormal from "public/components/watermark/normal/react/page"

export default function Theme({
  componentName,
  componentStyle,
  backgroundDesktop = "transparent",
  componentReactView,
}: {
  componentName: string;
  componentStyle: string;
  backgroundDesktop?: string;
  componentReactView: string;

}) {
  const REACT_PATH = `/components/${componentName}/${componentStyle}/react/`;

  const [refresh, setRefresh] = React.useState<number>(0);
  const [nextjsDesktop, setNextjsDesktop] = React.useState<string | null>(null);



  const componentReactMap = {
    ADemo: AccordionDemo,
    AWB: AccordionButton,
    AWPB:AccordionPictureButton,
    AM:AccordionMix,
    AL:AccordionList,
    ALA:AccordionListAvatar,
    BreadcrumbBasic:BreadcrumbBasic,
    BreadcrumbDemo:BreadcrumbDemo,

    AlertDemo: AlertDemo,
    AlertAction: AlertAction,
    AlertWithDescription: AlertWithDescription,
    AlertWithList: AlertWithList,
    AlertWithBorder: AlertWithBorder,
    AlertWithDismiss: AlertWithDismiss,
    AlertWithLink: AlertWithLink,
    AlertWithAction: AlertWithAction,
    TreeViewDemo:TreeViewDemo,


    // DCC:DesktopCardComponent,
    // DITC:DesktopInnovativeTagComponent,
    BasicCarousel:BasicCarousel,
    CarouselImage:CarouselImage,
    CarouselAuto:CarouselAuto,
    CarouselCircle:CarouselCircle,
    CarouselPreview:CarouselPreview,
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
    DisableTooltip:DisableTooltip,
    // AnimatedTooltip:AnimatedTooltip,
    ToastWithAction:ToastWithAction,
    ToastWithNormal:ToastWithNormal,
    ToastWithTitle:ToastWithTitle,
    CalendarDemo:CalendarDemo,

    NormalTags:NormalTags,
    InnovativeTags:InnovativeTags,
    RadioGroupForm:RadioGroupForm,
    NormalModal:NormalModal,
    PictureModal:PictureModal,
    ConfirmModal:ConfirmModal,
    NoticeModal:NoticeModal,
    SignupModal:SignupModal,
    LoginModal:LoginModal,
    BasicSearch:BasicSearch,
    TabsDemo:TabsDemo,
    CardWithNormal:CardWithNormal,
    CardWithPicture:CardWithPicture,
    CardWithPicVer:CardWithPicVer,
    LargeHeaderCard:LargeHeaderCard,
    EnquirySubmittedCard:EnquirySubmittedCard,
    FileUploadComponent:FileUploadComponent,
    // FileUploadWithIcon:FileUploadWithIcon,
    // FileUploadMutiple:FileUploadMutiple,
    ImageUploadComponent:ImageUploadComponent,
    // FileUploadLimitSize:FileUploadLimitSize,
    FileUploadPreview:FileUploadPreview,
    LoginForm:LoginForm,
    // SignUpForm:SignUpForm,
    CheckoutForm:CheckoutForm,
    ResponsiveForm:ResponsiveForm,
    // ContactUsForm:ContactUsForm,
    // NormalLink:NormalLink,
    EnhancedLink:EnhancedLink,
    ExpandLink:ExpandLink,
    BrowserWindow:BrowserMockup,
    MultiStepForm:MultiStepForm,

    DatePickerDemo:DatePickerDemo,
    dateTimeInput:dateTimeInput,
    MonthPickerDemo:MonthPickerDemo,
    TimePickerDemo:TimePickerDemo,
    DatePickerWithRange:DatePickerWithRange,
    WeekPicker:WeekPicker,
    ButtonDemo:ButtonDemo,
    ButtonDestructive:ButtonDestructive,
    ButtonLoading:ButtonLoading,
    ButtonIcon:ButtonIcon,
    ActiveButton:ActiveButton,
    FocusButton:FocusButton,
    HoverButton:HoverButton,
    TriggerButton:TriggerButton,
    SuccessPanel:SuccessPanel,
    FailPanel:FailPanel,
    NormalChat:NormalChat,
    AttachmentChat:AttachmentChat,
    AvatarDemo:AvatarDemo,
    Statisticnormal:Statisticnormal,
    IncardStatistic:IncardStatistic,
    CountdownStatistic:CountdownStatistic,
    Watermarknormal:Watermarknormal,

  };

  const ReactComponent = componentReactMap[componentReactView];



  React.useEffect(() => {
    fetchNextjsContent();    // Hypothetical function, used to obtain Next.js related content
  }, []);



  const refreshIframes = () => setRefresh((prev) => prev + 1);

  const fetchNextjsContent = async () => {

    setNextjsDesktop(await fetchContent(`${REACT_PATH}page.tsx`)); // Adjust the path to the correct Next.js script or content path

  };

  const fetchContent = async (path: string) =>
    await fetch(path).then((res) => (res.status === 200 ? res.text() : null));

  return (

        <div>
          <Tabs
            defaultValue="desktop"
            onValueChange={(e) => refreshIframes()}
            className="mt-5 w-full"
          >
            <div className="w-full rounded-md border">
              <TabsContent
                value="desktop"
                className={TABS_WPR_CLASS}
                style={{ backgroundColor: backgroundDesktop }}
              >

                <div className={TABS_CTNT_CLASS}>
                  {ReactComponent ? <ReactComponent /> : <div>Component not found</div>}
                </div>

              </TabsContent>
            </div>
            <div className="my-5">
              <p className="text-2xl font-semibold text-foreground mb-2">
                Code Usage
              </p>
              <Separator />
            </div>
            <ReactCodeTabs
              reactjs={nextjsDesktop} // Add new attributes
            />

          </Tabs>
        </div>
     
  );
}