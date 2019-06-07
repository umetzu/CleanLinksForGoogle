//
//  ViewController.swift
//  CleanLinksForGoogle
//
//  Created by Umetzu on 6/5/19.
//  Copyright © 2019 Umetzu. All rights reserved.
//

import Cocoa
import SafariServices.SFSafariApplication

class ViewController: NSViewController, NSWindowDelegate	 {
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func openSafariExtensionPreferences(_ sender: AnyObject?) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: "com.umetzu.CleanLinksForGoogle.Extension") { error in
            if let _ = error {

            }
        }
    }
    
    @IBAction func openAuthorWebsite(_ sender: AnyObject?) {
        let url = URL(string: "https://www.umetzu.com")!
        NSWorkspace.shared.open(url)
    }
}
