"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Select } from "@/components/common/Select";
import { Textarea } from "@/components/common/Textarea";
import { Section, SectionHeading } from "@/components/common/Section";
import { equipmentOptions } from "@/data/quote-options";
import { useQuoteForm } from "@/hooks/useQuoteForm";

export function QuoteForm() {
  const { form, onSubmit, status, resetStatus } = useQuoteForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Section id="quote" tone="light">
      <SectionHeading
        sectionId="quote"
        tone="light"
        eyebrow="Request a quote"
        title="Tell us about your load"
        description="Fill in the details and a dispatcher will get back to you with a rate."
      />
      <div className="max-w-3xl bg-steel p-6 text-offwhite sm:p-10">
        <div aria-live="polite">
          {status === "success" ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-3xl font-bold uppercase">Request received</h3>
              <p className="mt-2 text-concrete">
                Thanks. A dispatcher will contact you shortly with your rate.
              </p>
              <Button className="mt-6" onClick={resetStatus}>
                Send another request
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full name"
                autoComplete="name"
                required
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                label="Email"
                type="email"
                autoComplete="email"
                required
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                label="Phone"
                type="tel"
                autoComplete="tel"
                required
                error={errors.phone?.message}
                {...register("phone")}
              />
              <Select
                label="Equipment type"
                options={equipmentOptions}
                required
                error={errors.equipment?.message}
                {...register("equipment")}
              />
              <Input
                label="Pickup location"
                placeholder="City or zip"
                required
                error={errors.pickup?.message}
                {...register("pickup")}
              />
              <Input
                label="Drop-off location"
                placeholder="City or zip"
                required
                error={errors.dropoff?.message}
                {...register("dropoff")}
              />
              <Input
                label="Weight (lbs)"
                inputMode="decimal"
                placeholder="e.g. 20000"
                required
                error={errors.weight?.message}
                {...register("weight")}
              />
              <Input
                label="Pickup date"
                type="date"
                required
                error={errors.pickupDate?.message}
                {...register("pickupDate")}
              />
              <div className="sm:col-span-2">
                <Textarea
                  label="Message (optional)"
                  placeholder="Special requirements, commodity, appointment times"
                  error={errors.message?.message}
                  {...register("message")}
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    "Submit request"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
