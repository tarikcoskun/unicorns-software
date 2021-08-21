import { Dialog } from "@components/Dialog";

export default function Testing() {
  return (
    <>
      <main>
        <Dialog
          image="/image/unicorn_happy.png"
          title="Unicorn"
          dialog="Going backwards always brings you to the level select screen in this game."
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
