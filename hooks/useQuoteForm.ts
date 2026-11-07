"use client";

import { useState } from "react";
import type { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quickQuoteDefaults,
  quickQuoteSchema,
  quoteDefaults,
  quoteSchema,
} from "./quote.schema";
import type { QuickQuoteFormValues, QuoteFormValues } from "./quote.schema";
import { mockSubmit } from "./mock-submit";

export type FormStatus = "idle" | "success";

interface QuoteFormResult<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
  status: FormStatus;
  resetStatus: () => void;
}

export function useQuoteForm(): QuoteFormResult<QuoteFormValues> {
  const [status, setStatus] = useState<FormStatus>("idle");
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: quoteDefaults,
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await mockSubmit(values);
    setStatus("success");
    form.reset(quoteDefaults);
  });

  return { form, onSubmit, status, resetStatus: () => setStatus("idle") };
}

export function useQuickQuoteForm(): QuoteFormResult<QuickQuoteFormValues> {
  const [status, setStatus] = useState<FormStatus>("idle");
  const form = useForm<QuickQuoteFormValues>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: quickQuoteDefaults,
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await mockSubmit(values);
    setStatus("success");
    form.reset(quickQuoteDefaults);
  });

  return { form, onSubmit, status, resetStatus: () => setStatus("idle") };
}
