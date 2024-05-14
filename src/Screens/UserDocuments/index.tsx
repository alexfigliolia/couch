import { Fragment, memo } from "react";
import { Heading } from "Components/Heading";
import { PageScrollView } from "Components/PageScrollView";
import { DocList } from "./DocList";
import { DocViewer } from "./DocViewer";
import { ShortCuts } from "./ShortCuts";
import { Styles } from "./Styles";

export const UserDocuments = memo(
  function UserDocuments() {
    return (
      <Fragment>
        <PageScrollView style={Styles.container}>
          <ShortCuts />
          <Heading text="Your Documents" style={Styles.heading} />
          <DocList />
        </PageScrollView>
        <DocViewer />
      </Fragment>
    );
  },
  () => true,
);
