import { Suspense } from "react";
import { LocaMap } from "~/components/LocaMap";
import { Find } from "~/components/find/index.client";

export default function FindPage() {
    return (
        <Suspense>
            <Find />
        </Suspense>
    );
}
