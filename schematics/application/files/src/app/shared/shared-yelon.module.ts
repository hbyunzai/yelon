import { PageHeaderModule } from '@yelon/abc/page-header';
import { SEModule } from '@yelon/abc/se';
import { STModule } from '@yelon/abc/st';
import { SVModule } from '@yelon/abc/sv'; <% if (form) { %>
import { YelonFormModule } from '@yelon/form'; <% } %>

export const SHARED_YELON_MODULES = [PageHeaderModule, STModule, SEModule, SVModule <% if (form) { %>, YelonFormModule <% } %>];
