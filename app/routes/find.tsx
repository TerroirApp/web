import { Find } from "~/components/find/index.client";
import { ClientOnly } from "~/components/utils/ClientOnly";

export default function FindPage() {
    return <ClientOnly>{() => <Find />}</ClientOnly>;
}
