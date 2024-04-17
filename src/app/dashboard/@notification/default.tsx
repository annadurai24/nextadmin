import Card from "@annadurai/Card";
import Link from "next/link";

export default function DefaultNotification() {
    return (
    <Card>
        <div>Default Notification</div>&nbsp;
        <Link href="/dashboard/archived">Archived Notification</Link>
    </Card>
)
}