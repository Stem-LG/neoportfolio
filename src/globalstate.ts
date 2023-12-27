import { effect, signal } from '@preact/signals-react';


export const pageHistory = signal([{ idx: 0, path: "/" }]);
export const currentPage = signal(0);