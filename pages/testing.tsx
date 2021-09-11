import { DialogComponent } from "@components/Dialog";

export default function Testing() {
  return (
    <>
      <main>
        <DialogComponent
          dialog={[
            {
              name: "Dailog Name",
              image: "/image/unicorn_happy.png",
              title: "Unicorn 1",
              text: "Going backwards always brings you to the level select screen in this game.",
            },
            {
              name: "Dailog Name",
              image: "/image/unicorn_happy.png",
              title: "Unicorn 2",
              text: "Going backwards always brings you to the level select screen in this game.",
            },
          ]}
        />
      </main>
      <style jsx>{`
        main {
          background: url("/image/refbg.png");
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}
