import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ResumePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Resume</h1>
        </div>
        <embed src="Resume.pdf" type="application/pdf" width={800} height={1170}/>
      </section>
    </DefaultLayout>
  );
}
