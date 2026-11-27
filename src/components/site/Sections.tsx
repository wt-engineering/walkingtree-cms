import { blocks, Generic } from "./blocks";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Sections({ sections, extra }: { sections: { id: string; type: string; data: any }[]; extra?: Record<string, (d: any) => React.ReactNode> }) {
  return (
    <>
      {sections.map((s) => {
        const custom = extra?.[s.type];
        if (custom) return <div key={s.id} data-block={s.type}>{custom(s.data)}</div>;
        const C = blocks[s.type];
        return <div key={s.id} data-block={s.type}>{C ? C({ data: s.data }) : <Generic data={s.data} />}</div>;
      })}
    </>
  );
}
