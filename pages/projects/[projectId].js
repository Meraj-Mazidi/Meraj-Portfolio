import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
// projects
import { ShowProject } from "../../Projects";

const ProjectDetails = () => {
  const router = useRouter();
  const projectId = router.query.projectId;

  return (
    <Fragment>
      <Head>
        <title>{projectId}</title>
        <link rel="icon" href="/logo-icon.png" />
      </Head>

      <section className="w-screen lg:pl-32 relative mb-10 xl:container xl:mx-auto">
        <div className="w-full">
          <img
            src={"/images/vectors/ellipse.svg"}
            className="absolute right-0 top-1 blur-sm"
          />
          <img
            src={"/images/vectors/triangle.svg"}
            className="absolute right-2 md:right-1/2 top-[5%] md:top-0 animate-spin"
            width={100}
          />

          <ShowProject id={projectId} />
        </div>
      </section>
    </Fragment>
  );
};

export default ProjectDetails;
