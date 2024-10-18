import { Dispatch, FC, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";

const formSchema = z.object({
  cardNumber: z.string().min(19, "Card number must be 16 digits"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date"),
  cvc: z.string().length(3, "CVC must be 3 digits"),
});

type Props = {
  setActiveStep: Dispatch<SetStateAction<number>>;
};

export const BookingForm: FC<Props> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
    form.setValue("cardNumber", formattedValue);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      form.setValue("expiry", value);
    } else {
      form.setValue("expiry", `${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    form.setValue("cvc", value.slice(0, 3));
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Booking Methods :</h2>
      <p className="text-sm text-gray-600 mb-6">
        Make sure you reserve your court by leaving a deposit or send a simple
        booking request that can be confirmed by the owner. Leaving the deposit
        is very quick, simple and safe.
      </p>

      <Accordion type={"multiple"} className="w-full">
        <AccordionItem value="credit-card">
          <AccordionTrigger className="text-green-600">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>CREDIT CARD</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-1">
            <p className="text-sm text-gray-500 mb-4">
              Enter your credit card informations to confirm the deposit.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          {...field}
                          onChange={handleCardNumberChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-4">
                  <FormField
                    control={form.control}
                    name="expiry"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Expiry</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="MM/YY"
                            {...field}
                            onChange={handleExpiryChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvc"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123"
                            {...field}
                            onChange={handleCvcChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-orange-500"
                >
                  DEPOSIT 10 USD
                </Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="paypal">
          <AccordionTrigger className="text-green-600">
            {" "}
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>PAYPAL</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            PayPal payment option content goes here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="booking-request">
          <AccordionTrigger className="text-green-600">
            {" "}
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>CLOVER</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Booking request form content goes here.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
