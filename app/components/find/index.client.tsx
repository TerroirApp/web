import { useAtomValue } from "jotai";
import { EnterPosition } from "~/components/find/EnterPosition.client";
import { FindMap } from "~/components/find/FindMap.client";
import { positionAtom } from "~/store/positionAtom";

export function Find() {
    const currentPosition = useAtomValue(positionAtom);

    if (!currentPosition) {
        return <EnterPosition />;
    }

    return <FindMap userPosition={currentPosition} />;
}
