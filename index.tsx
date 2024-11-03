"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const objections = {
  "It costs too much": [
    "I understand that cost is a concern. Let's break down the value you're getting for your investment.",
    "Compared to our competitors, our product offers superior features that justify the price point.",
    "We offer flexible payment plans that can help make this more affordable for you.",
    "Consider the long-term savings and ROI our product will provide for your business."
  ],
  "I need to think about it": [
    "Of course, I appreciate you taking the time to consider. What specific aspects would you like more information about?",
    "I understand. To help with your decision, what are the key factors you're evaluating?",
    "That's reasonable. While you're thinking it over, let me provide you with some customer success stories that might be relevant.",
    "Would it be helpful if I summarized the key benefits we've discussed so far?"
  ],
  "I'm happy with my current solution": [
    "I'm glad to hear you're satisfied. Out of curiosity, what do you like most about your current solution?",
    "That's great. Have you considered how our product could complement your current setup to further improve your results?",
    "I understand. Are there any areas where you feel your current solution could be improved?",
    "It's good that you're content. Would you be open to a brief comparison to see if we could offer any additional benefits?"
  ],
  "I don't have time right now": [
    "I completely understand. When would be a better time for us to continue this conversation?",
    "No problem. I can send you some brief information to review at your convenience. What's the best way to follow up?",
    "I appreciate you're busy. How about I give you a quick 30-second summary of the key benefits right now?",
    "Of course, time is valuable. Would it be helpful if I scheduled a short demo at a time that works better for you?"
  ]
}

export default function ObjectionHandler() {
  const [selectedObjection, setSelectedObjection] = useState<string | null>(null)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Objection Handling Tool</CardTitle>
        <CardDescription>Select an objection to see tailored responses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={(value) => setSelectedObjection(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose an objection" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(objections).map((objection) => (
                <SelectItem key={objection} value={objection}>
                  {objection}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {selectedObjection && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responses to: {selectedObjection}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  <ul className="space-y-4">
                    {objections[selectedObjection as keyof typeof objections].map((response, index) => (
                      <li key={index}>
                        <p className="text-sm">{response}</p>
                        <Button variant="outline" size="sm" className="mt-2" onClick={() => navigator.clipboard.writeText(response)}>
                          Copy
                        </Button>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
