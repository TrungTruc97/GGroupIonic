#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVInvokedUrlCommand.h>
#include <ifaddrs.h>
#include <arpa/inet.h>

@interface Network : CDVPlugin

- (void) list:(CDVInvokedUrlCommand*)command;

@end
