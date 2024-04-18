import React from "react";
import CodeBlock from "./codeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS_CTNT_CLASS, CODE_TAB_CLASS } from "../constants/strings";

//需要修改
const ReactCodeTabs = ({
  reactjs, // Added Next.js desktop version code
}: {
  reactjs: string | null; // New attribute type
}) => {
  return (
    <>
      <TabsContent value="desktop" className={TABS_CTNT_CLASS}>
        <Tabs defaultValue="nextjs" className="w-full">
          <div className="flex items-center justify-between pb-3">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              {/* existing trigger */}
              {/* Add React.js trigger */}
              {reactjs && (
                <TabsTrigger value="nextjs" className={CODE_TAB_CLASS}>
                  React.js
                </TabsTrigger>
              )}
            </TabsList>
          </div>
          {/* Existing content area */}
          {/* Add  content area */}
          {reactjs && (
            <TabsContent value="nextjs">
              <CodeBlock code={reactjs} language="javascript" />
            </TabsContent>
          )}
        </Tabs>
      </TabsContent>
    </>
  );
};

export default ReactCodeTabs;
