<?php
    define('PROGRESS_BAR_FORMAT_PAGE_NUMBERS', 1);
    define('PROGRESS_BAR_FORMAT_PAGE_TITLES', 2);
    define('PROGRESS_BAR_FORMAT_PERCENTAGE', 3);

    define('CONTENT_TYPE_SINGLE_LINE_INPUT_BOX', 1);
    define('CONTENT_TYPE_MULTIPLE_CHOICE', 2);
    define('CONTENT_TYPE_MULTILINE_INPUT_BOX', 3);
    define('CONTENT_TYPE_DESCRIPTIVE_TEXT', 4);
    define('CONTENT_TYPE_IDENTITY_VERIFICATION', 5);
    define('CONTENT_TYPE_CONTENT_REVIEW', 6);
    define('CONTENT_TYPE_ADDRESS', 7);

    define('INPUT_FORMAT_LETTERS_ONLY', 1);
    define('INPUT_FORMAT_NUMBERS_ONLY', 2);
    define('INPUT_FORMAT_LETTERS_AND_NUMBERS', 3);
    define('INPUT_FORMAT_LETTERS_NUMBERS_AND_SYMBOLS', 4);
    define('INPUT_FORMAT_PERCENTAGE', 5);
    define('INPUT_FORMAT_EMAIL', 6);
    define('INPUT_FORMAT_DATE', 7);
    define('INPUT_FORMAT_PASSWORD', 8);
    define('INPUT_FORMAT_LANDLINE_PHONE', 9);
    define('INPUT_FORMAT_MOBILE_PHONE', 10);
    define('INPUT_FORMAT_INTERNATIONAL_PHONE', 11);
    define('INPUT_FORMAT_TFN', 12);
    define('INPUT_FORMAT_ABN', 13);
    define('INPUT_FORMAT_ADDRESS', 14);

    function getStructure() {
        return array(
            'template'    => array(
                'templateId' => 1,
                'templateSettings' => array(
                    'theme' => 'light',
                    'colour' => array(
                        '0' => array(
                            'default' => '#a71f23',
                            'lightest' => '',
                            'light' => '#c8252a',
                            'dark' => '#86191c',
                            'alternative' => '#'
                        ),
                        '1' => array(
                            'default' => '#0093a0',
                            'lightest' => '#f2fafa',
                            'light' => '#00b0c0',
                            'dark' => '#007680',
                            'alternative' => '#ffffff'
                        ),
                        'headerBackground' => '#e3f1f9',
                        'override' => '',
                        'sectionBarBackground' => array(
                            'default' => '#dce7ea',
                            'light' => '#ffffff'
                        ),
                        'sectionBarFont' => '#0093a0',
                        'bodyBackground' => '#ffffff',
                        'bodyText' => '#666666'
                    ),
                    'sprite' => '/img/sprites.png',
                    'headerBackgroundImage' => '',
                    'headerImage' => '/img/bgImage.jpg',
                    'formTitleImage' => '/img/logo.png',
                    'formContactType' => 'phone',
                    'formContactContent' => '0456874562',
                    'radius' => '6px',
                    'headingsFontFamily' => 'Georgia,"Times New Roman",Times,serif',
                    'fontFamily' => 'Arial,Helvetica,sans-serif',
                    'fontSize' => -0.1,
                    'enable3d' => true,
                    'btnLabelPrevious' => 'Previous',
                    'btnLabelNext' => 'Proceed',
                    'btnLabelSave' => 'Complete Later',
                    'btnLabelSaveSub' => 'Save my application',
                    'btnLabelPrint' => 'Print this form',
                    'btnLabelPrintSub' => 'This will load a PDF',
                    'btnLabelComplete' => 'Complete',
                    'bulletPointUnicodeCharacter' => '&bull;'
                ),
            ),

            'form'        => array(
                'applicationId'         => 1,
                'formTitle'             => 'Account Application',
                'formUrl'               => 'account-application',
                'progressBarFormatId'   => PROGRESS_BAR_FORMAT_PAGE_TITLES,
                'totalPersona'          => 3,
                'enableCompleteLater'   => true,
                'enableSignaturePanel'  => false,
                'pages'                 => array(



                    // START PAGE 1
                    array(
                        'pageTitle'          => 'Get started with our fast and easy application form',
                        'enablePageTitle'    => true,
                        'pageIcons'          => array(
                            'active'    => 'img/navBar/nb_1_ffffff.png',
                            'inactive'  => 'img/navBar/nb_1_0093a0.png',
                            'unvisited' => 'img/navBar/nb_1_666666.png',
                        ),
                        'pageUrl'            => 'get-started',
                        'progressBarTitle'   => 'Get Started',
                        'sections'           => array(

                            array(
                                'sectionId'    => 1,
                                'sectionTitle' => 'Get started',
                                'contents'     => array(
                                    array(
                                        'contentId'     => 1,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'         => '<h4>Are you an existing customer?</h4>
                                                <!-- TODO #question - what is this? sectionintroText? -->
                                                <p>
                                                    Existing customers (members) can quickly apply for new accounts through Internet Banking. Not yet registered for Internet Banking? Complete this application form and we\'ll get back to you with your new account information.
                                                </p>

                                                <div class="non-mobile">
                                                    <img src="/templates/001/img/intro-image.jpg" width="100%" />
                                                </div>
                                                <div class="visible-phone">
                                                    <img src="/templates/001/img/intro-image-mobile.jpg" width="100%" />
                                                </div>

                                                <h4>Not yet a customer?</h4>
                                                <p>
                                                    To open an account you will need to become a member of our club. Our simple, secure application will enable you to open both your membership and your accounts online in minutes.
                                                </p>

                                                <h5>You will need to be:</h5>
                                                <ul class="bulletPointList">
                                                    <li><span class="bulletPoint">&bull;</span>aged 18 years or over; and</li>
                                                    <li><span class="bulletPoint">&bull;</span>a permanent Australian resident.</li>
                                                </ul>

                                                <h5>We are required by law to verify your identiy. This can be done easily if you have the following information to hand:</h5>
                                                <ul class="bulletPointList">
                                                    <li><span class="bulletPoint">&bull;</span>your current Australian Passport;</li>
                                                    <li><span class="bulletPoint">&bull;</span>your current Driver\'s Licence (VIC, QLD, SA and ACT only);</li>
                                                    <li><span class="bulletPoint">&bull;</span>your Medicare Card; or</li>
                                                    <li><span class="bulletPoint">&bull;</span>your Tax File Number;</li>
                                                </ul>

                                                <h4>Saving your application</h4>
                                                <p>
                                                    If you don\'t have all the information to complete your application form now, you can save your application form at any time and pick up where you left off later. To save your application, simply click SAVE at the bottom of the page, enter your email address and we\'ll send you a unique PIN to access your application at a later date.
                                                </p>',
                                            'enableScroll' => false
                                        )
                                    )
                                )
                            ),

                            array(
                                'sectionId'    => 2,
                                'sectionTitle' => 'Your application details',
                                'contents'     => array(
                                    array(
                                        'contentId'     => 2,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'tooltip'       => 'Please select one or more of our products.',
                                        'attribs'       => array(
                                            'question'     => 'Which product are you applying for? (Choose more than 1 if applicable)',
                                            'required'     => true,
                                            'responseType' => 'multiple',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value'      => 'Online Saver',
                                                    'optionIcon' => '/img/multiChoice/MC_pig.png'
                                                ),
                                                array(
                                                    'value'      => 'Low Rate VISA Credit Card',
                                                    'optionIcon' => '/img/multiChoice/MC_CC.png'
                                                ),
                                                array(
                                                    'value'      => 'Construction Loan Package',
                                                    'optionIcon' => '/img/multiChoice/MC_home.png'
                                                ),
                                                array(
                                                    'value'      => 'Home and Contents Insurance',
                                                    'optionIcon' => '/img/multiChoice/MC_insure.png'
                                                ),
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 3,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Number of applicants applying for the product?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value'      => '1',
                                                    'optionIcon' => '/img/multiChoice/1app.png'
                                                ),
                                                array(
                                                    'value'      => '2',
                                                    'optionIcon' => '/img/multiChoice/2app.png'
                                                ),
                                                array(
                                                    'value'      => '3',
                                                    'optionIcon' => '/img/multiChoice/3app.png'
                                                )
                                            )
                                        )
                                    ),

                                    // Details for applicant 1
                                    array(
                                        'contentId'     => 4,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => '<h4>Details for applicant 1</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 5,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your first name',
                                            'suggestedInput'=> 'i.e. Andrew',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 6,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your last name',
                                            'suggestedInput'=> 'i.e Citizen',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 7,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter email address',
                                            'suggestedInput'=> 'i.e. acitizen@email.com.au',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_EMAIL,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 8,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Are you an existing customer?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 9,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'tooltip' => 'Please ensure you enter an 8 digit member number.',
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 8,
                                                    'operator'         => '==',
                                                    'value'            => 'Yes'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your member number',
                                            'suggestedInput' => 'i.e. 12345678',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_NUMBERS_ONLY,
                                        )
                                    ),


                                    // Details for applicant 2
                                    array(
                                        'contentId'     => 10,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'text'          => '<h4>Details for applicant 2</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 11,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your first name',
                                            'suggestedInput'=> 'i.e. Andrew',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 12,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your last name',
                                            'suggestedInput'=> 'i.e Citizen',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 13,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter email address',
                                            'suggestedInput'=> 'i.e. acitizen@email.com.au',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_EMAIL,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 14,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'     => 'Are you an existing customer?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 15,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'tooltip' => 'Please ensure you enter an 8 digit member number.',
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 14,
                                                    'operator'         => '==',
                                                    'value'            => 'Yes'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your member number',
                                            'suggestedInput' => 'i.e. 12345678',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_NUMBERS_ONLY,
                                        )
                                    ),


                                    // Details for applicant 3
                                    array(
                                        'contentId'     => 16,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'text'          => '<h4>Details for applicant 3</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 17,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your first name',
                                            'suggestedInput'=> 'i.e. Andrew',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 18,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your last name',
                                            'suggestedInput'=> 'i.e Citizen',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 19,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter email address',
                                            'suggestedInput'=> 'i.e. acitizen@email.com.au',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_EMAIL,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 20,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 3,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'     => 'Are you an existing customer?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 21,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'tooltip' => 'Please ensure you enter an 8 digit member number.',
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 20,
                                                    'operator'         => '==',
                                                    'value'            => 'Yes'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your member number',
                                            'suggestedInput' => 'i.e. 12345678',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_NUMBERS_ONLY,
                                        )
                                    ),


                                    // Number of Authorised Signatories
                                    array(
                                        'contentId'     => 22,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => '<h4>Number of Authorised Signatories</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 23,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Enter the number of other individuals you would like to act as an authorised signatory on the account(s).',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value'      => '0',
                                                    'optionIcon' => '/img/multiChoice/noapp.png'
                                                ),
                                                array(
                                                    'value'      => '1',
                                                    'optionIcon' => '/img/multiChoice/1app.png'
                                                ),
                                                array(
                                                    'value'      => '2',
                                                    'optionIcon' => '/img/multiChoice/2app.png'
                                                ),
                                                array(
                                                    'value'      => '3',
                                                    'optionIcon' => '/img/multiChoice/3app.png'
                                                )
                                            )
                                        )
                                    ),

                                    // Details for authorised signatory 1
                                    array(
                                        'contentId'     => 24,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '0'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'text'          => '<h4>Details for authorised signatory 1</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 25,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '0'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your first name',
                                            'suggestedInput'=> 'i.e. Andrew',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 26,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '0'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your last name',
                                            'suggestedInput'=> 'i.e Citizen',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 27,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '0'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter email address',
                                            'suggestedInput'=> 'i.e. acitizen@email.com.au',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_EMAIL,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 28,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '0'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'     => 'Are you an existing customer?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 29,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'tooltip' => 'Please ensure you enter an 8 digit member number.',
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 28,
                                                    'operator'         => '==',
                                                    'value'            => 'Yes'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your member number',
                                            'suggestedInput' => 'i.e. 12345678',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_NUMBERS_ONLY,
                                        )
                                    ),




                                    // Details for authorised signatory 2
                                    array(
                                        'contentId'     => 30,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'text'          => '<h4>Details for authorised signatory 2</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 31,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your first name',
                                            'suggestedInput'=> 'i.e. Andrew',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 32,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your last name',
                                            'suggestedInput'=> 'i.e Citizen',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 33,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter email address',
                                            'suggestedInput'=> 'i.e. acitizen@email.com.au',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_EMAIL,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 34,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '1'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'     => 'Are you an existing customer?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 35,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'tooltip' => 'Please ensure you enter an 8 digit member number.',
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 34,
                                                    'operator'         => '==',
                                                    'value'            => 'Yes'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your member number',
                                            'suggestedInput' => 'i.e. 12345678',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_NUMBERS_ONLY,
                                        )
                                    ),




                                    // Details for authorised signatory 3
                                    array(
                                        'contentId'     => 36,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'text'          => '<h4>Details for authorised signatory 3</h4>',
                                        )
                                    ),
                                    array(
                                        'contentId'     => 37,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your first name',
                                            'suggestedInput'=> 'i.e. Andrew',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 38,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your last name',
                                            'suggestedInput'=> 'i.e Citizen',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 39,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter email address',
                                            'suggestedInput'=> 'i.e. acitizen@email.com.au',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_EMAIL,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 40,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'displayRule'  => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 23,
                                                    'operator'         => '>',
                                                    'value'            => '2'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'     => 'Are you an existing customer?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 41,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'tooltip' => 'Please ensure you enter an 8 digit member number.',
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 40,
                                                    'operator'         => '==',
                                                    'value'            => 'Yes'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'      => 'Please enter your member number',
                                            'suggestedInput' => 'i.e. 12345678',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_NUMBERS_ONLY,
                                        )
                                    ),
                                ),
                            ),
                        ),
                    ),
                    // END PAGE 1

                    // START PAGE 2
                    array(
                        'pageTitle'          => 'Personal Details',
                        'enablePageTitle'    => true,
                        'pageIcons'          => array(
                            'active'    => 'img/navBar/nb_2_ffffff.png',
                            'inactive'  => 'img/navBar/nb_2_0093a0.png',
                            'unvisited' => 'img/navBar/nb_2_666666.png',
                        ),
                        'pageUrl'            => 'personal-details',

                        // Show this page if at least one person in not a member
                        'displayRule'   => array(
                            'logicalOperator' => 'or',
                            'policies'        => array(
                                array(
                                    'triggerContentId' => 8,
                                    'operator'         => '==',
                                    'value'            => 'No'
                                ),
                                array(
                                    'triggerContentId' => 14,
                                    'operator'         => '==',
                                    'value'            => 'No'
                                ),
                                array(
                                    'triggerContentId' => 20,
                                    'operator'         => '==',
                                    'value'            => 'No'
                                ),
                                array(
                                    'triggerContentId' => 28,
                                    'operator'         => '==',
                                    'value'            => 'No'
                                ),
                                array(
                                    'triggerContentId' => 34,
                                    'operator'         => '==',
                                    'value'            => 'No'
                                ),
                                array(
                                    'triggerContentId' => 40,
                                    'operator'         => '==',
                                    'value'            => 'No'
                                ),
                            )
                        ),

                        'sections'       => array(

                            // Each person is a section - app 1
                            array(
                                'sectionId'    => 3,
                                'sectionTitle' => "Personal Details for {Formbanc_populate|5|Applicant 1}",

                                // Show this section if app 1 in not a member
                                'displayRule'   => array(
                                    'logicalOperator' => 'or',
                                    'policies'        => array(
                                        array(
                                            'triggerContentId' => 8,
                                            'operator'         => '==',
                                            'value'            => 'No'
                                        ),
                                    )
                                ),

                                'contents'       => array(
                                    array(
                                        'contentId'     => 42,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Please provide your title',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'vertical',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Please Select'
                                                ),
                                                array(
                                                    'value' => 'Mr'
                                                ),
                                                array(
                                                    'value' => 'Mrs'
                                                ),
                                                array(
                                                    'value' => 'Miss'
                                                ),
                                                array(
                                                    'value' => 'Master'
                                                ),
                                                array(
                                                    'value' => 'Dr'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 43,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your middle name',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 44,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your date of birth',
                                            'suggestedInput'=> 'dd/mm/yyyy',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_DATE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 45,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your mobile telephone number',
                                            'suggestedInput'=> '+61 (4__) ___ ___',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_MOBILE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 46,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your work telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 47,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your home telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 48,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your tax file number',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_TFN,
                                        )
                                    ),

                                    // App 1 Internet Banking
                                    array(
                                        'contentId'     => 49,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Internet Banking for {Formbanc_populate|5|Applicant 1}</h4>
                                                We will enable you to transact on your account via Internet Banking",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 50,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'          => 'Please enter an Internet Banking password',
                                            'required'          => true,
                                            'confirmationLabel' => 'Please confirm your Internet Banking password',
                                            'inputFormatId'     => INPUT_FORMAT_PASSWORD,
                                        )
                                    ),


                                    // App 1 Address Details
                                    array(
                                        'contentId'     => 51,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Address Details for {Formbanc_populate|5|Applicant 1}</h4>",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 52,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'attribs'       => array(
                                            'question'          => 'Please enter your current address',
                                            'suggestedInput'    => 'Your current address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 53,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Is your postal address the same as your current address?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 54,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 53,
                                                    'operator'         => '==',
                                                    'value'            => 'No'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'          => 'Please enter your postal address',
                                            'suggestedInput'    => 'Your postal address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                )
                            ),

                            // Each person is a section - app 2
                            array(
                                'sectionId'    => 4,
                                'sectionTitle' => "Personal Details for {Formbanc_populate|11|Applicant 2}",

                                // Show this section if app 2 in not a member
                                'displayRule'   => array(
                                    'logicalOperator' => 'or',
                                    'policies'        => array(
                                        array(
                                            'triggerContentId' => 14,
                                            'operator'         => '==',
                                            'value'            => 'No'
                                        ),
                                    )
                                ),

                                'contents'       => array(
                                    array(
                                        'contentId'     => 55,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Please provide your title',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'vertical',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Mr'
                                                ),
                                                array(
                                                    'value' => 'Mrs'
                                                ),
                                                array(
                                                    'value' => 'Miss'
                                                ),
                                                array(
                                                    'value' => 'Master'
                                                ),
                                                array(
                                                    'value' => 'Dr'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 56,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your middle name',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 57,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your date of birth',
                                            'suggestedInput'=> 'dd/mm/yyyy',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_DATE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 58,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your mobile telephone number',
                                            'suggestedInput'=> '+61 (04__) ___ ___',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_MOBILE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 59,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your work telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 60,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your home telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 61,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your tax file number',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_TFN,
                                        )
                                    ),

                                    // App 2 Internet Banking
                                    array(
                                        'contentId'     => 62,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Internet Banking for {Formbanc_populate|11|Applicant 2}</h4>
                                                We will enable you to transact on your account via Internet Banking",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 63,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'          => 'Please enter an Internet Banking password',
                                            'required'          => true,
                                            'confirmationLabel' => 'Please confirm your Internet Banking password',
                                            'inputFormatId'     => INPUT_FORMAT_PASSWORD,
                                        )
                                    ),


                                    // App 2 Address Details
                                    array(
                                        'contentId'     => 64,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Address Details for {Formbanc_populate|11|Applicant 2}</h4>",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 65,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'attribs'       => array(
                                            'question'          => 'Please enter your current address',
                                            'suggestedInput'    => 'Your current address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 66,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Is your postal address the same as your current address?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 67,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 66,
                                                    'operator'         => '==',
                                                    'value'            => 'No'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'          => 'Please enter your postal address',
                                            'suggestedInput'    => 'Your postal address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                )
                            ),

                            // Each person is a section - app 3
                            array(
                                'sectionId'    => 5,
                                'sectionTitle' => "Personal Details for {Formbanc_populate|17|Applicant 3}",

                                // Show this section if app 3 in not a member
                                'displayRule'   => array(
                                    'logicalOperator' => 'or',
                                    'policies'        => array(
                                        array(
                                            'triggerContentId' => 20,
                                            'operator'         => '==',
                                            'value'            => 'No'
                                        ),
                                    )
                                ),

                                'contents'       => array(
                                    array(
                                        'contentId'     => 68,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Please provide your title',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'vertical',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Mr'
                                                ),
                                                array(
                                                    'value' => 'Mrs'
                                                ),
                                                array(
                                                    'value' => 'Miss'
                                                ),
                                                array(
                                                    'value' => 'Master'
                                                ),
                                                array(
                                                    'value' => 'Dr'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 69,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your middle name',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 70,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your date of birth',
                                            'suggestedInput'=> 'dd/mm/yyyy',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_DATE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 71,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your mobile telephone number',
                                            'suggestedInput'=> '+61 (04__) ___ ___',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_MOBILE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 72,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your work telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 73,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your home telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 74,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your tax file number',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_TFN,
                                        )
                                    ),

                                    // App 3 Internet Banking
                                    array(
                                        'contentId'     => 75,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Internet Banking for {Formbanc_populate|17|Applicant 3}</h4>
                                                We will enable you to transact on your account via Internet Banking",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 76,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'          => 'Please enter an Internet Banking password',
                                            'required'          => true,
                                            'confirmationLabel' => 'Please confirm your Internet Banking password',
                                            'inputFormatId'     => INPUT_FORMAT_PASSWORD,
                                        )
                                    ),


                                    // App 3 Address Details
                                    array(
                                        'contentId'     => 77,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Address Details for {Formbanc_populate|17|Applicant 3}</h4>",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 78,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'attribs'       => array(
                                            'question'          => 'Please enter your current address',
                                            'suggestedInput'    => 'Your current address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 79,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Is your postal address the same as your current address?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 80,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 79,
                                                    'operator'         => '==',
                                                    'value'            => 'No'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'          => 'Please enter your postal address',
                                            'suggestedInput'    => 'Your postal address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                )
                            ),

                            // Each person is a section - sig 1
                            array(
                                'sectionId'    => 6,
                                'sectionTitle' => "Personal Details for {Formbanc_populate|25|Signatory 1}",

                                // Show this section if sig 1 in not a member
                                'displayRule'   => array(
                                    'logicalOperator' => 'or',
                                    'policies'        => array(
                                        array(
                                            'triggerContentId' => 28,
                                            'operator'         => '==',
                                            'value'            => 'No'
                                        ),
                                    )
                                ),

                                'contents'       => array(
                                    array(
                                        'contentId'     => 81,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Please provide your title',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'vertical',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Mr'
                                                ),
                                                array(
                                                    'value' => 'Mrs'
                                                ),
                                                array(
                                                    'value' => 'Miss'
                                                ),
                                                array(
                                                    'value' => 'Master'
                                                ),
                                                array(
                                                    'value' => 'Dr'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 82,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your middle name',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 83,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your date of birth',
                                            'suggestedInput'=> 'dd/mm/yyyy',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_DATE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 84,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your mobile telephone number',
                                            'suggestedInput'=> '+61 (04__) ___ ___',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_MOBILE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 85,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your work telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 86,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your home telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 87,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your tax file number',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_TFN,
                                        )
                                    ),

                                    // Signatory 1 Internet Banking
                                    array(
                                        'contentId'     => 88,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Internet Banking for {Formbanc_populate|25|Signatory 1}</h4>
                                                We will enable you to transact on your account via Internet Banking",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 89,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'          => 'Please enter an Internet Banking password',
                                            'required'          => true,
                                            'confirmationLabel' => 'Please confirm your Internet Banking password',
                                            'inputFormatId'     => INPUT_FORMAT_PASSWORD,
                                        )
                                    ),


                                    // Signatory 1 Address Details
                                    array(
                                        'contentId'     => 90,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Address Details for {Formbanc_populate|25|Signatory 1}</h4>",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 91,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'attribs'       => array(
                                            'question'          => 'Please enter your current address',
                                            'suggestedInput'    => 'Your current address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 92,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Is your postal address the same as your current address?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 93,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 92,
                                                    'operator'         => '==',
                                                    'value'            => 'No'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'          => 'Please enter your postal address',
                                            'suggestedInput'    => 'Your postal address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                )
                            ),

                            // Each person is a section - sig 2
                            array(
                                'sectionId'    => 7,
                                'sectionTitle' => "Personal Details for {Formbanc_populate|31|Signatory 2}",

                                // Show this section if sig 2 in not a member
                                'displayRule'   => array(
                                    'logicalOperator' => 'or',
                                    'policies'        => array(
                                        array(
                                            'triggerContentId' => 34,
                                            'operator'         => '==',
                                            'value'            => 'No'
                                        ),
                                    )
                                ),

                                'contents'       => array(
                                    array(
                                        'contentId'     => 94,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Please provide your title',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'vertical',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Mr'
                                                ),
                                                array(
                                                    'value' => 'Mrs'
                                                ),
                                                array(
                                                    'value' => 'Miss'
                                                ),
                                                array(
                                                    'value' => 'Master'
                                                ),
                                                array(
                                                    'value' => 'Dr'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 95,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your middle name',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 96,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your date of birth',
                                            'suggestedInput'=> 'dd/mm/yyyy',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_DATE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 97,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your mobile telephone number',
                                            'suggestedInput'=> '+61 (04__) ___ ___',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_MOBILE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 98,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your work telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 99,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your home telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 100,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your tax file number',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_TFN,
                                        )
                                    ),

                                    // Sig 2 Internet Banking
                                    array(
                                        'contentId'     => 101,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Internet Banking for {Formbanc_populate|31|Signatory 2}</h4>
                                                We will enable you to transact on your account via Internet Banking",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 102,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'          => 'Please enter an Internet Banking password',
                                            'required'          => true,
                                            'confirmationLabel' => 'Please confirm your Internet Banking password',
                                            'inputFormatId'     => INPUT_FORMAT_PASSWORD,
                                        )
                                    ),


                                    // Sig 2 Address Details
                                    array(
                                        'contentId'     => 103,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Address Details for {Formbanc_populate|31|Signatory 2}</h4>",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 104,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'attribs'       => array(
                                            'question'          => 'Please enter your current address',
                                            'suggestedInput'    => 'Your current address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 105,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Is your postal address the same as your current address?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 106,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 105,
                                                    'operator'         => '==',
                                                    'value'            => 'No'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'          => 'Please enter your postal address',
                                            'suggestedInput'    => 'Your postal address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                )
                            ),

                            // Each person is a section - sig 3
                            array(
                                'sectionId'    => 8,
                                'sectionTitle' => "Personal Details for {Formbanc_populate|37|Signatory 3}",

                                // Show this section if sig 3 in not a member
                                'displayRule'   => array(
                                    'logicalOperator' => 'or',
                                    'policies'        => array(
                                        array(
                                            'triggerContentId' => 40,
                                            'operator'         => '==',
                                            'value'            => 'No'
                                        ),
                                    )
                                ),

                                'contents'       => array(
                                    array(
                                        'contentId'     => 107,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Please provide your title',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'vertical',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Mr'
                                                ),
                                                array(
                                                    'value' => 'Mrs'
                                                ),
                                                array(
                                                    'value' => 'Miss'
                                                ),
                                                array(
                                                    'value' => 'Master'
                                                ),
                                                array(
                                                    'value' => 'Dr'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 108,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your middle name',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 109,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your date of birth',
                                            'suggestedInput'=> 'dd/mm/yyyy',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_DATE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 110,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your mobile telephone number',
                                            'suggestedInput'=> '+61 (04__) ___ ___',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_MOBILE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 111,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your work telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 112,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your home telephone number',
                                            'suggestedInput'=> '+61 (0_) ____ ____',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_LANDLINE_PHONE,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 113,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'Please enter your tax file number',
                                            'required'      => false,
                                            'inputFormatId' => INPUT_FORMAT_TFN,
                                        )
                                    ),

                                    // Sig 3 Internet Banking
                                    array(
                                        'contentId'     => 114,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Internet Banking for {Formbanc_populate|37|Signatory 3}</h4>
                                                We will enable you to transact on your account via Internet Banking",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 115,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'          => 'Please enter an Internet Banking password',
                                            'required'          => true,
                                            'confirmationLabel' => 'Please confirm your Internet Banking password',
                                            'inputFormatId'     => INPUT_FORMAT_PASSWORD,
                                        )
                                    ),


                                    // Sig 3 Address Details
                                    array(
                                        'contentId'     => 116,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'          => "<h4>Address Details for {Formbanc_populate|37|Signatory 3}</h4>",
                                        )
                                    ),
                                    array(
                                        'contentId'     => 117,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'attribs'       => array(
                                            'question'          => 'Please enter your current address',
                                            'suggestedInput'    => 'Your current address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 118,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Is your postal address the same as your current address?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Yes'
                                                ),
                                                array(
                                                    'value' => 'No'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 119,
                                        'contentTypeId' => CONTENT_TYPE_ADDRESS,
                                        'displayRule'   => array(
                                            'logicalOperator' => 'or',
                                            'policies'        => array(
                                                array(
                                                    'triggerContentId' => 118,
                                                    'operator'         => '==',
                                                    'value'            => 'No'
                                                )
                                            )
                                        ),
                                        'attribs'       => array(
                                            'question'          => 'Please enter your postal address',
                                            'suggestedInput'    => 'Your postal address',
                                            'required'          => true,
                                            'inputFormatId'     => INPUT_FORMAT_ADDRESS,
                                        )
                                    ),
                                )
                            ),
                        )
                    ),



                    array(
                        'pageTitle'          => 'Account Details',
                        'enablePageTitle'    => true,
                        'pageIcons'          => array(
                            'active'    => 'img/navBar/nb_3_ffffff.png',
                            'inactive'  => 'img/navBar/nb_3_0093a0.png',
                            'unvisited' => 'img/navBar/nb_3_666666.png',
                        ),
                        'pageUrl'            => 'account-details',
                        'sections'  => array(

                            array(
                                'sectionId'    => 9,
                                'sectionTitle' => 'Account Details',
                                'contents'     => array(
                                    array(
                                        'contentId'     => 120,
                                        'contentTypeId' => CONTENT_TYPE_SINGLE_LINE_INPUT_BOX,
                                        'attribs'       => array(
                                            'question'      => 'What would you like to name your account?',
                                            'required'      => true,
                                            'inputFormatId' => INPUT_FORMAT_LETTERS_ONLY,
                                        )
                                    ),
                                    array(
                                        'contentId'     => 121,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'Who is required to sign to make withdraws on the account',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Any of us can sign'
                                                ),
                                                array(
                                                    'value' => 'All of us must sign'
                                                )
                                            )
                                        )
                                    ),
                                    array(
                                        'contentId'     => 122,
                                        'contentTypeId' => CONTENT_TYPE_MULTIPLE_CHOICE,
                                        'attribs'       => array(
                                            'question'     => 'How would you like to receive your statements?',
                                            'required'     => true,
                                            'responseType' => 'single',
                                            'output'       => 'horizontal',
                                            'options'      => array(
                                                array(
                                                    'value' => 'Online'
                                                ),
                                                array(
                                                    'value' => 'Mail'
                                                )
                                            )
                                        )
                                    )
                                )
                            )

                        )
                    ),

                    array(
                        'pageTitle'          => 'Review',
                        'enablePageTitle'    => true,
                        'pageIcons'          => array(
                            'active'    => 'img/navBar/nb_4_ffffff.png',
                            'inactive'  => 'img/navBar/nb_4_0093a0.png',
                            'unvisited' => 'img/navBar/nb_4_666666.png',
                        ),
                        'pageUrl'            => 'review',
                        'sections'  => array(
                            array(
                                'sectionId'    => 10,
                                'sectionTitle' => null,
                                'contents'     => array(
                                    array(
                                        'contentId'     => 123,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'      => '<p>It\'s really important that we have your correct information. Please check the details you have entered below.</p>',
                                        )
                                    ),
                                    array(
                                        'contentId'      => 124,
                                        'contentTypeId'  => CONTENT_TYPE_CONTENT_REVIEW,
                                        'attribs' => array(
                                            'question'       => '{Formbanc_populate|4|Applicant 1}\'s Application Details',
                                            'questionIcon'   => '/img/questionIcon.png',
                                            'contents'       => array(
                                                'sectionId'  => 2,
                                                'contentIds' => array(5,6),
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),



                    // comment-page 5 (Identity Verification)
                    array(
                        'pageTitle'          => 'Identification',
                        'enablePageTitle'    => true,
                        'pageIcons'          => array(
                            'active'    => 'img/navBar/nb_5_ffffff.png',
                            'inactive'  => 'img/navBar/nb_5_0093a0.png',
                            'unvisited' => 'img/navBar/nb_5_666666.png',
                        ),
                        'pageUrl'            => 'identification',
                        'progressBarTitle'   => 'Verify Your Identity',
                        'sections'  => array(

                            array(
                                'sectionId'    => 21,
                                'sectionTitle' => 'Verify Your Identity',
                                'contents'     => array(
                                    array(
                                        'contentId'     => 125,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'         => '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper commodo leo sit amet tempor. Pellentesque varius turpis eget risus pharetra lacinia. Morbi dui nunc, sagittis ut tincidunt ut, sagittis in erat. Fusce malesuada rhoncus lorem, eu vestibulum augue vestibulum ut. Curabitur commodo libero vel tellus lacinia vel dignissim mi lacinia. In sagittis, elit ac porttitor suscipit, enim augue congue erat, ut semper lacus sapien posuere libero. Mauris tempus lorem ac justo mollis mattis. Nunc quam turpis, dapibus nec molestie eget, rutrum quis purus. Nulla dictum elit at leo ultricies laoreet. Phasellus et quam ligula.</p><p>Nam semper vulputate tempus. In quis velit sit amet leo ullamcorper pretium vitae quis sapien. Mauris quis ligula cursus magna fermentum rutrum non nec leo. </p>
                                                <h4>What you need</h4>
                                                <p>We recommend that you gather your sources of ID before you begin the verification process</p>
                                                <p>Common sources of ID are:</p>
                                                <ul class="bulletPointList">
                                                    <li><span class="bulletPoint">&bull;</span>Your current Australian passport</li>
                                                    <li><span class="bulletPoint">&bull;</span>Your current driving licence</li>
                                                    <li><span class="bulletPoint">&bull;</span>Your Medicare number</li>
                                                    <li><span class="bulletPoint">&bull;</span>Your Tax File Number</li>
                                                    <li><span class="bulletPoint">&bull;</span>An Australian work visa</li>
                                                </ul>',
                                            'enableScroll' => false
                                        )
                                    ),
                                    array(
                                        'contentId'     => 123,
                                        'contentTypeId' => CONTENT_TYPE_IDENTITY_VERIFICATION,
                                        'attribs'       => array(
                                            'summaryPageIntroMsg'           => 'blah blah blah',
                                            'summaryPageDocMsg'             => 'blah blah blah',
                                            'individualVerificationPageMsg' => 'blah blah blah',
                                            'applicants'                    => array(
                                                array(
                                                    'persona'     => 1,
                                                    'name'        => array(4, 27, 5),
                                                    'displayRule' => array(
                                                        'logicalOperator' => 'and',
                                                        'policies'        => array(
                                                            array(
                                                                'triggerContentId' => 8,
                                                                'operator'         => '==',
                                                                'value'            => 'No'
                                                            )
                                                        )
                                                    )
                                                ),
                                                array(
                                                    'persona'     => 2,
                                                    'name'        => array(8, 39, 9),
                                                    'displayRule' => array(
                                                        'logicalOperator' => 'and',
                                                        'policies'        => array(
                                                            array(
                                                                'triggerContentId' => 3,
                                                                'operator'         => '>',
                                                                'value'            => '1'
                                                            ),
                                                            array(
                                                                'triggerContentId' => 11,
                                                                'operator'         => '==',
                                                                'value'            => 'No'
                                                            )
                                                        )
                                                    )
                                                ),
                                                array(
                                                    'persona'     => 3,
                                                    'name'        => array(12, 52, 13),
                                                    'displayRule' => array(
                                                        'logicalOperator' => 'and',
                                                        'policies'        => array(
                                                            array(
                                                                'triggerContentId' => 3,
                                                                'operator'         => '>',
                                                                'value'            => '2'
                                                            ),
                                                            array(
                                                                'triggerContentId' => 15,
                                                                'operator'         => '==',
                                                                'value'            => 'No'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )

                        )
                    ),



                    // comment-page 6 (Confirmation)
                    array(
                        'pageTitle'          => 'Congratulations...',
                        'enablePageTitle'    => true,
                        'pageUrl'            => 'confirmation',
                        'progressBarTitle'   => 'Confirmation',
                        'sections'  => array(

                            // comment-section 6-1
                            array(
                                'sectionId'    => 22,
                                'sectionTitle' => 'Congratulations...',
                                'contents'     => array(
                                    // comment-content 6-1-1
                                    array(
                                        'contentId'     => 69,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'         => 'Your membership and account(s) are now open and ready to go.',
                                            'enableScroll' => false
                                        )
                                    ),
                                    // comment-content 6-1-2
                                    array(
                                        'contentId'     => 70,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'         => 'We have sent you an email containing all the important information you need to know such as your customer and account number. You will be able to log in to Internet Banking immediately and begin transacting.',
                                            'enableScroll' => false
                                        )
                                    ),
                                    // comment-content 6-1-3
                                    array(
                                        'contentId'     => 71,
                                        'contentTypeId' => CONTENT_TYPE_DESCRIPTIVE_TEXT,
                                        'attribs'       => array(
                                            'text'         => 'Application reference number: XXXXXX',
                                            'enableScroll' => false
                                        )
                                    )
                                )
                            )

                        )
                    )
                )
            )
        );
    }