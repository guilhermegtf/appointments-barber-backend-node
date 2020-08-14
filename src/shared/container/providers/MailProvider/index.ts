import { container } from 'tsyringe';

import IMailProvider from './models/IMailProvider';

import EtherialMailProvider from './implementations/EtherialMailProvider';

const providers = {
  etherial: container.resolve(EtherialMailProvider),
};

container.registerInstance<IMailProvider>('MailProvider', providers.etherial);
