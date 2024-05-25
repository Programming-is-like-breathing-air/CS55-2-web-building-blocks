import * as React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FailPanel() {
    return (
        <Card style={{ width: '350px', backgroundColor: 'red' }}>
            <CardHeader className="bg-gray-100 p-4">
                <CardTitle style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Application Failed</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
                <CardDescription style={{ textAlign: 'center', color: 'white', fontWeight: 'semi-bold' }}>
                    Please try again
                </CardDescription>

                <CardDescription style={{ textAlign: 'center', color: 'white', fontWeight: 'semi-bold' }}>
                    <Button variant="link" style={{ marginTop: '16px', color: 'white', fontWeight: 'semi-bold' }}>
                        Back
                    </Button>
                </CardDescription>

            </CardContent>
        </Card>
    )
}
export default FailPanel;