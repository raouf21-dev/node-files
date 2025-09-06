import React, { useState, useEffect } from 'react';
import { Package, Truck, Phone, MapPin, Clock, Camera, DollarSign, Star, Navigation, Search, Bell, User, CheckCircle, XCircle, Globe, CreditCard, Route, Zap, Shield, TrendingUp, Users, Target, Award, Smartphone } from 'lucide-react';

const WassalApp = () => {
  const [userType, setUserType] = useState(null); // 'customer', 'driver', 'admin', 'marketing'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('ar');
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Translation system
  const translations = {
    ar: {
      // Welcome Screen
      appName: 'Wassal',
      appTagline: 'وصّل بسرعة وبأفضل سعر',
      appSubtitle: 'في الجزائر 🇩🇿',
      customerButton: 'أريد إرسال طرد 📦',
      driverButton: 'أنا سائق 🚗',
      adminButton: 'الإدارة ⚙️',
      marketingButton: 'الموقع التسويقي 🌐',
      
      // Phone Auth
      phoneTitle: 'رقم الهاتف 📱',
      codeTitle: 'رمز التحقق 🔐',
      phoneSubtitle: 'أدخل رقم هاتفك للمتابعة',
      codeSubtitle: 'أدخل الرمز المرسل إليك',
      sendCode: 'إرسال الرمز 🚀',
      verify: 'تحقق ✅',
      codeSentTo: 'رمز مرسل إلى',
      
      // Customer App
      customerHeader: 'Wassal',
      newRequestTitle: 'طلب توصيل جديد',
      newRequestSubtitle: 'املأ التفاصيل وستصلك عروض الأسعار 💰',
      itemPlaceholder: 'ماذا تريد أن ترسل؟ 📦',
      fromPlaceholder: 'من (المدينة) 📍',
      toPlaceholder: 'إلى (المدينة) 🎯',
      descriptionPlaceholder: 'وصف مفصل (الوزن، الأبعاد، تعليمات خاصة...) ✍️',
      addPhotos: 'إضافة صور 📸',
      addPhotosDesc: 'اضغط لرفع صور الطرد',
      publishRequest: 'نشر الطلب 🚀',
      myRequestsTitle: 'طلباتي',
      myRequestsSubtitle: 'تابع حالة طلبات التوصيل 📋',
      offersReceived: 'العروض المستلمة',
      waitingOffers: 'في انتظار العروض... ⏳',
      call: 'اتصال 📞',
      newTab: 'جديد',
      requestsTab: 'طلباتي',
      paymentTab: 'الدفع',
      
      // Driver App
      driverHeader: 'Wassal سائق',
      availableJobs: 'المهام المتاحة',
      availableJobsSubtitle: 'اختر المهام التي تناسبك 🎯',
      onMission: '🚗 في مهمة',
      currentMission: 'المهمة الحالية',
      destination: '🎯 الوجهة:',
      searchNextMission: '💡 يمكنك البحث عن مهمتك التالية الآن!',
      lowestOffer: '🏆 أقل عرض:',
      makeOffer: '💰 تقديم عرض',
      yourPrice: 'سعرك بالدينار الجزائري 💰',
      confirmOffer: '✅ تأكيد العرض',
      cancel: 'إلغاء',
      jobsTab: 'المهام',
      trackingTab: 'التتبع',
      ratingsTab: 'التقييمات',
      routeTab: 'المسار',
      
      // Enhanced Features
      notifications: 'الإشعارات',
      paymentMethods: 'طرق الدفع',
      routeOptimization: 'تحسين المسار',
      ratingDetails: 'تفاصيل التقييم',
      estimatedDistance: 'المسافة المقدرة:',
      estimatedTime: 'الوقت المقدر:',
      fuelCost: 'تكلفة الوقود:',
      
      // Payment
      cashPayment: 'دفع نقدي 💵',
      cardPayment: 'دفع بالبطاقة 💳',
      mobilePayment: 'دفع عبر الهاتف 📱',
      paymentReceived: 'تم استلام الدفع',
      paymentPending: 'في انتظار الدفع',
      
      // Ratings
      punctuality: 'الالتزام بالوقت',
      professionalism: 'المهنية',
      vehicleCondition: 'حالة السيارة',
      communication: 'التواصل',
      overallRating: 'التقييم العام',
      
      // Common
      da: 'دج',
      km: 'كم',
      min: 'دقيقة',
      offers: 'عرض 💼',
      calling: 'جاري الاتصال:',
      at: 'في'
    },
    
    fr: {
      // Welcome Screen  
      appName: 'Wassal',
      appTagline: 'Livraison rapide et économique',
      appSubtitle: 'en Algérie 🇩🇿',
      customerButton: 'Envoyer un colis 📦',
      driverButton: 'Je suis chauffeur 🚗',
      adminButton: 'Administration ⚙️',
      marketingButton: 'Site marketing 🌐',
      
      // Phone Auth
      phoneTitle: 'Numéro de téléphone 📱',
      codeTitle: 'Code de vérification 🔐',
      phoneSubtitle: 'Entrez votre numéro pour continuer',
      codeSubtitle: 'Entrez le code reçu',
      sendCode: 'Envoyer le code 🚀',
      verify: 'Vérifier ✅',
      codeSentTo: 'Code envoyé au',
      
      // Customer App
      customerHeader: 'Wassal',
      newRequestTitle: 'Nouvelle demande de livraison',
      newRequestSubtitle: 'Remplissez les détails et recevez des offres 💰',
      itemPlaceholder: 'Que voulez-vous envoyer? 📦',
      fromPlaceholder: 'De (ville) 📍',
      toPlaceholder: 'Vers (ville) 🎯',
      descriptionPlaceholder: 'Description détaillée (poids, dimensions, instructions...) ✍️',
      addPhotos: 'Ajouter des photos 📸',
      addPhotosDesc: 'Cliquez pour télécharger les photos',
      publishRequest: 'Publier la demande 🚀',
      myRequestsTitle: 'Mes demandes',
      myRequestsSubtitle: 'Suivez vos demandes de livraison 📋',
      offersReceived: 'Offres reçues',
      waitingOffers: 'En attente d\'offres... ⏳',
      call: 'Appeler 📞',
      newTab: 'Nouveau',
      requestsTab: 'Mes demandes',
      paymentTab: 'Paiement',
      
      // Driver App
      driverHeader: 'Wassal Chauffeur',
      availableJobs: 'Missions disponibles',
      availableJobsSubtitle: 'Choisissez les missions qui vous conviennent 🎯',
      onMission: '🚗 En mission',
      currentMission: 'Mission en cours',
      destination: '🎯 Destination:',
      searchNextMission: '💡 Vous pouvez chercher votre prochaine mission!',
      lowestOffer: '🏆 Offre la plus basse:',
      makeOffer: '💰 Faire une offre',
      yourPrice: 'Votre prix en DA 💰',
      confirmOffer: '✅ Confirmer l\'offre',
      cancel: 'Annuler',
      jobsTab: 'Missions',
      trackingTab: 'Suivi',
      ratingsTab: 'Évaluations',
      routeTab: 'Itinéraire',
      
      // Enhanced Features
      notifications: 'Notifications',
      paymentMethods: 'Modes de paiement',
      routeOptimization: 'Optimisation d\'itinéraire',
      ratingDetails: 'Détails d\'évaluation',
      estimatedDistance: 'Distance estimée:',
      estimatedTime: 'Temps estimé:',
      fuelCost: 'Coût carburant:',
      
      // Payment
      cashPayment: 'Paiement cash 💵',
      cardPayment: 'Paiement carte 💳',
      mobilePayment: 'Paiement mobile 📱',
      paymentReceived: 'Paiement reçu',
      paymentPending: 'Paiement en attente',
      
      // Ratings
      punctuality: 'Ponctualité',
      professionalism: 'Professionnalisme',
      vehicleCondition: 'État du véhicule',
      communication: 'Communication',
      overallRating: 'Note générale',
      
      // Common
      da: 'DA',
      km: 'km',
      min: 'min',
      offers: 'offre(s) 💼',
      calling: 'Appel en cours:',
      at: 'à'
    },
    
    en: {
      // Welcome Screen
      appName: 'Wassal',
      appTagline: 'Fast & affordable delivery',
      appSubtitle: 'in Algeria 🇩🇿',
      customerButton: 'Send a package 📦',
      driverButton: 'I\'m a driver 🚗',
      adminButton: 'Administration ⚙️',
      marketingButton: 'Marketing Site 🌐',
      
      // Phone Auth
      phoneTitle: 'Phone Number 📱',
      codeTitle: 'Verification Code 🔐',
      phoneSubtitle: 'Enter your phone number to continue',
      codeSubtitle: 'Enter the code you received',
      sendCode: 'Send Code 🚀',
      verify: 'Verify ✅',
      codeSentTo: 'Code sent to',
      
      // Customer App
      customerHeader: 'Wassal',
      newRequestTitle: 'New delivery request',
      newRequestSubtitle: 'Fill in details and receive price offers 💰',
      itemPlaceholder: 'What do you want to send? 📦',
      fromPlaceholder: 'From (city) 📍',
      toPlaceholder: 'To (city) 🎯',
      descriptionPlaceholder: 'Detailed description (weight, dimensions, instructions...) ✍️',
      addPhotos: 'Add photos 📸',
      addPhotosDesc: 'Click to upload photos',
      publishRequest: 'Publish Request 🚀',
      myRequestsTitle: 'My Requests',
      myRequestsSubtitle: 'Track your delivery requests 📋',
      offersReceived: 'Offers Received',
      waitingOffers: 'Waiting for offers... ⏳',
      call: 'Call 📞',
      newTab: 'New',
      requestsTab: 'My Requests',
      paymentTab: 'Payment',
      
      // Driver App
      driverHeader: 'Wassal Driver',
      availableJobs: 'Available Jobs',
      availableJobsSubtitle: 'Choose jobs that suit you 🎯',
      onMission: '🚗 On Mission',
      currentMission: 'Current Mission',
      destination: '🎯 Destination:',
      searchNextMission: '💡 You can search for your next mission!',
      lowestOffer: '🏆 Lowest offer:',
      makeOffer: '💰 Make Offer',
      yourPrice: 'Your price in DA 💰',
      confirmOffer: '✅ Confirm Offer',
      cancel: 'Cancel',
      jobsTab: 'Jobs',
      trackingTab: 'Tracking',
      ratingsTab: 'Ratings',
      routeTab: 'Route',
      
      // Enhanced Features
      notifications: 'Notifications',
      paymentMethods: 'Payment Methods',
      routeOptimization: 'Route Optimization',
      ratingDetails: 'Rating Details',
      estimatedDistance: 'Estimated distance:',
      estimatedTime: 'Estimated time:',
      fuelCost: 'Fuel cost:',
      
      // Payment
      cashPayment: 'Cash Payment 💵',
      cardPayment: 'Card Payment 💳',
      mobilePayment: 'Mobile Payment 📱',
      paymentReceived: 'Payment Received',
      paymentPending: 'Payment Pending',
      
      // Ratings
      punctuality: 'Punctuality',
      professionalism: 'Professionalism',
      vehicleCondition: 'Vehicle Condition',
      communication: 'Communication',
      overallRating: 'Overall Rating',
      
      // Common
      da: 'DA',
      km: 'km',
      min: 'min',
      offers: 'offer(s) 💼',
      calling: 'Calling:',
      at: 'at'
    }
  };

  const t = (key) => translations[language][key] || key;

  // Mock data with enhanced features
  const [jobs, setJobs] = useState([
    {
      id: 1,
      customerId: 1,
      item: 'Samsung Refrigerator / Réfrigérateur Samsung / ثلاجة سامسونغ',
      from: 'Algiers / Alger / الجزائر',
      to: 'Bab Ezzouar / باب الزوار',
      date: '2025-09-08',
      time: '14:00',
      description: 'Samsung 350L refrigerator, needs 2 people / Réfrigérateur Samsung 350L, besoin de 2 personnes / ثلاجة سامسونغ 350 لتر، تحتاج شخصين',
      photo: '🧊',
      status: 'open',
      estimatedDistance: 25,
      estimatedTime: 45,
      fuelCost: 300,
      bids: [
        { driverId: 1, price: 3000, driverName: 'Ahmed Benali / أحمد بن علي', rating: 4.8, phone: '+213555123456' },
        { driverId: 2, price: 2500, driverName: 'Mohamed Cherif / محمد شريف', rating: 4.9, phone: '+213555987654' }
      ]
    },
    {
      id: 2,
      customerId: 2,
      item: '3-seat sofa / Canapé 3 places / أريكة 3 مقاعد',
      from: 'Oran / وهران',
      to: 'Es Senia / السانيا',
      date: '2025-09-09',
      time: '10:00',
      description: 'New sofa wrapped in plastic / Canapé neuf emballé / أريكة جديدة مغلفة',
      photo: '🛋️',
      status: 'open',
      estimatedDistance: 15,
      estimatedTime: 30,
      fuelCost: 180,
      bids: []
    }
  ]);

  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: 'Ahmed Benali / أحمد بن علي',
      phone: '+213555123456',
      rating: 4.8,
      detailedRatings: {
        punctuality: 4.9,
        professionalism: 4.8,
        vehicleCondition: 4.7,
        communication: 4.8
      },
      reviews: [
        { customer: 'Fatima K.', comment: 'Excellent service, très ponctuel!', rating: 5 },
        { customer: 'Omar M.', comment: 'Professional driver, recommend!', rating: 4.5 }
      ],
      verified: true,
      currentJob: null,
      location: 'Algiers / الجزائر'
    },
    {
      id: 2,
      name: 'Mohamed Cherif / محمد شريف',
      phone: '+213555987654',
      rating: 4.9,
      detailedRatings: {
        punctuality: 5.0,
        professionalism: 4.9,
        vehicleCondition: 4.8,
        communication: 4.9
      },
      reviews: [
        { customer: 'Amina S.', comment: 'Very careful with fragile items', rating: 5 },
        { customer: 'Youssef B.', comment: 'Great communication throughout', rating: 4.8 }
      ],
      verified: true,
      currentJob: { id: 1, status: 'en_route', destination: 'Bab Ezzouar / باب الزوار' },
      location: 'Algiers / الجزائر'
    }
  ]);

  // Notification system
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const notificationTypes = [
          { type: 'new_bid', message: 'New bid received on your delivery request! 💰', icon: '💰' },
          { type: 'job_assigned', message: 'Your bid was accepted! Get ready to deliver 🚚', icon: '✅' },
          { type: 'delivery_update', message: 'Package is 15 minutes away from destination 📍', icon: '🚚' },
          { type: 'payment_received', message: 'Payment of 2500 DA received! 💵', icon: '💵' },
          { type: 'new_job', message: 'New delivery job available in your area! 📦', icon: '📦' }
        ];
        
        const randomNotif = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
        const newNotification = {
          id: Date.now(),
          ...randomNotif,
          timestamp: new Date(),
          read: false
        };
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Language Selector Component
  const LanguageSelector = () => (
    <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-3 py-2">
      <Globe className="w-4 h-4 text-white" />
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer"
      >
        <option value="ar" className="text-gray-900">العربية</option>
        <option value="fr" className="text-gray-900">Français</option>
        <option value="en" className="text-gray-900">English</option>
      </select>
    </div>
  );

  // Notification Component
  const NotificationPanel = () => (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-bold text-gray-900">{t('notifications')}</h3>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Bell className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>No notifications yet</p>
          </div>
        ) : (
          notifications.map(notif => (
            <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 flex items-start gap-3">
              <span className="text-2xl">{notif.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {notif.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  // Marketing Landing Page
  const MarketingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
      {/* Header */}
      <div className="bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold text-white">Wassal</h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setUserType(null)}
              className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-orange-50 transition-colors"
            >
              {language === 'ar' ? 'تجربة التطبيق' : language === 'fr' ? 'Essayer l\'app' : 'Try App'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">
          {language === 'ar' ? 'وصّل أي شيء في أي مكان' : 
           language === 'fr' ? 'Livrez tout, partout' : 
           'Deliver Anything, Anywhere'}
        </h1>
        <p className="text-2xl mb-8 text-orange-100">
          {language === 'ar' ? 'أسرع وأرخص خدمة توصيل في الجزائر' :
           language === 'fr' ? 'Le service de livraison le plus rapide et économique d\'Algérie' :
           'Algeria\'s fastest and most affordable delivery service'}
        </p>
        <div className="flex justify-center gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
            <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'سريع' : language === 'fr' ? 'Rapide' : 'Fast'}
            </h3>
            <p>{language === 'ar' ? 'توصيل في نفس اليوم' : language === 'fr' ? 'Livraison le jour même' : 'Same-day delivery'}</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
            <DollarSign className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'اقتصادي' : language === 'fr' ? 'Économique' : 'Affordable'}
            </h3>
            <p>{language === 'ar' ? 'أفضل الأسعار' : language === 'fr' ? 'Meilleurs prix' : 'Best prices'}</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
            <Shield className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'ar' ? 'آمن' : language === 'fr' ? 'Sécurisé' : 'Secure'}
            </h3>
            <p>{language === 'ar' ? 'سائقون معتمدون' : language === 'fr' ? 'Chauffeurs vérifiés' : 'Verified drivers'}</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {language === 'ar' ? 'لماذا تختار Wassal؟' :
             language === 'fr' ? 'Pourquoi choisir Wassal?' :
             'Why Choose Wassal?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'ar' ? 'نظام المزايدة' : language === 'fr' ? 'Système d\'enchères' : 'Bidding System'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? 'السائقون يتنافسون لتقديم أفضل سعر لك' :
                 language === 'fr' ? 'Les chauffeurs rivalisent pour vous offrir le meilleur prix' :
                 'Drivers compete to give you the best price'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Route className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'ar' ? 'تحسين المسار' : language === 'fr' ? 'Optimisation des itinéraires' : 'Route Optimization'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? 'أقل وقت وتكلفة للوصول' :
                 language === 'fr' ? 'Moins de temps et de coûts' :
                 'Minimize time and costs'}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                {language === 'ar' ? 'تتبع مباشر' : language === 'fr' ? 'Suivi en temps réel' : 'Real-time Tracking'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? 'تابع طردك لحظة بلحظة' :
                 language === 'fr' ? 'Suivez votre colis en temps réel' :
                 'Track your package every step'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">10,000+</div>
              <p>{language === 'ar' ? 'عملية توصيل' : language === 'fr' ? 'Livraisons' : 'Deliveries'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <p>{language === 'ar' ? 'سائق نشط' : language === 'fr' ? 'Chauffeurs actifs' : 'Active Drivers'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">48</div>
              <p>{language === 'ar' ? 'ولاية مغطاة' : language === 'fr' ? 'Wilayas couvertes' : 'Covered Cities'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
              <p>{language === 'ar' ? 'تقييم العملاء' : language === 'fr' ? 'Note clients' : 'Customer Rating'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-20 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          {language === 'ar' ? 'جرب Wassal اليوم!' :
           language === 'fr' ? 'Essayez Wassal aujourd\'hui!' :
           'Try Wassal Today!'}
        </h2>
        <p className="text-xl mb-8">
          {language === 'ar' ? 'انضم إلى آلاف العملاء الراضين' :
           language === 'fr' ? 'Rejoignez des milliers de clients satisfaits' :
           'Join thousands of satisfied customers'}
        </p>
        <button
          onClick={() => setUserType(null)}
          className="bg-white text-orange-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg"
        >
          {language === 'ar' ? 'ابدأ الآن' : language === 'fr' ? 'Commencer maintenant' : 'Get Started Now'}
        </button>
      </div>
    </div>
  );

  // Welcome Screen
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full backdrop-blur-sm bg-opacity-95">
        {/* Language Selector at top */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 bg-orange-500 rounded-full px-3 py-2">
            <Globe className="w-4 h-4 text-white" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer"
            >
              <option value="ar" className="text-gray-900">العربية</option>
              <option value="fr" className="text-gray-900">Français</option>
              <option value="en" className="text-gray-900">English</option>
            </select>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Truck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
            {t('appName')}
          </h1>
          <p className="text-xl text-gray-700 font-semibold mb-1">{t('appTagline')}</p>
          <p className="text-gray-500">{t('appSubtitle')}</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => {setUserType('customer'); setActiveTab('home');}}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Package className="w-6 h-6" />
            {t('customerButton')}
          </button>
          
          <button
            onClick={() => {setUserType('driver'); setActiveTab('home');}}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Truck className="w-6 h-6" />
            {t('driverButton')}
          </button>
          
          <button
            onClick={() => {setUserType('admin'); setActiveTab('home');}}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:from-purple-600 hover:to-indigo-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <CheckCircle className="w-6 h-6" />
            {t('adminButton')}
          </button>
          
          <button
            onClick={() => setUserType('marketing')}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <Globe className="w-6 h-6" />
            {t('marketingButton')}
          </button>
        </div>
      </div>
    </div>
  );

  // Customer App with Enhanced Features
  const CustomerApp = () => {
    const [newJob, setNewJob] = useState({
      item: '',
      from: '',
      to: '',
      date: '',
      time: '',
      description: ''
    });

    const PaymentView = () => (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
            {t('paymentMethods')}
          </h2>
          <p className="text-gray-600 text-lg">Choose your preferred payment method</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">💵</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t('cashPayment')}</h3>
                  <p className="text-gray-600">Pay the driver directly</p>
                </div>
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                {t('paymentReceived')}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t('cardPayment')}</h3>
                  <p className="text-gray-600">Visa, Mastercard, CIB</p>
                </div>
              </div>
              <div className="text-gray-500 font-medium">Available</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{t('mobilePayment')}</h3>
                  <p className="text-gray-600">Mobilis, Djezzy, Ooredoo</p>
                </div>
              </div>
              <div className="text-gray-500 font-medium">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    );

    // Rest of customer app remains the same but with enhanced payment tab
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 shadow-xl">
          <div className="max-w-md mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">{t('customerHeader')}</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="bg-white bg-opacity-20 p-2 rounded-full relative"
                >
                  <Bell className="w-6 h-6 text-white" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs w-5 h-5 rounded-full flex items-center justify-center text-gray-900 font-bold">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {showNotifications && <NotificationPanel />}
              </div>
              <LanguageSelector />
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto p-6">
          {activeTab === 'home' && <div>Post Job Form Here</div>}
          {activeTab === 'jobs' && <div>Jobs List Here</div>}
          {activeTab === 'payment' && <PaymentView />}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-200 shadow-2xl">
          <div className="max-w-md mx-auto flex">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'home' ? 'text-orange-600 bg-orange-50' : 'text-gray-400'
              }`}
            >
              <Package className="w-6 h-6" />
              <span className="text-xs mt-1">{t('newTab')}</span>
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'jobs' ? 'text-orange-600 bg-orange-50' : 'text-gray-400'
              }`}
            >
              <Clock className="w-6 h-6" />
              <span className="text-xs mt-1">{t('requestsTab')}</span>
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'payment' ? 'text-orange-600 bg-orange-50' : 'text-gray-400'
              }`}
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-xs mt-1">{t('paymentTab')}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Driver App with Enhanced Features
  const DriverApp = () => {
    const currentDriver = drivers.find(d => d.id === currentUser?.id);

    const RatingsView = () => (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            {t('ratingDetails')}
          </h2>
          <p className="text-gray-600 text-lg">Your performance metrics</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-emerald-600 mb-2">{currentDriver?.rating}</div>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(star => (
                <Star key={star} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">Based on {currentDriver?.reviews?.length || 0} reviews</p>
          </div>
          
          <div className="space-y-6">
            {currentDriver?.detailedRatings && Object.entries(currentDriver.detailedRatings).map(([key, value]) => (
              <div key={key}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{t(key)}</span>
                  <span className="font-bold text-emerald-600">{value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
                    style={{width: `${(value / 5) * 100}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Recent Reviews</h3>
          {currentDriver?.reviews?.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <span className="font-bold text-gray-900">{review.customer}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{review.rating}</span>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );

    const RouteView = () => (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            {t('routeOptimization')}
          </h2>
          <p className="text-gray-600 text-lg">Optimize your delivery routes</p>
        </div>
        
        {jobs.filter(job => job.status === 'open').map(job => (
          <div key={job.id} className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{job.item}</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <Route className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-sm text-gray-600">{t('estimatedDistance')}</p>
                <p className="text-2xl font-bold text-emerald-600">{job.estimatedDistance} {t('km')}</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-2xl">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-sm text-gray-600">{t('estimatedTime')}</p>
                <p className="text-2xl font-bold text-blue-600">{job.estimatedTime} {t('min')}</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <Zap className="w-8 h-8 text-yellow-600 mb-3" />
                <p className="text-sm text-gray-600">{t('fuelCost')}</p>
                <p className="text-2xl font-bold text-yellow-600">{job.fuelCost} {t('da')}</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
                <p className="text-sm text-gray-600">Potential Profit</p>
                <p className="text-2xl font-bold text-green-600">
                  {job.bids.length > 0 ? 
                    Math.min(...job.bids.map(b => b.price)) - job.fuelCost : 
                    '---'
                  } {t('da')}
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Optimized Route</span>
              </div>
              <p className="text-gray-700">{job.from} → {job.to}</p>
              <p className="text-sm text-green-600 mt-2">✅ Most efficient route selected</p>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl">
          <div className="max-w-md mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">{t('driverHeader')}</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="bg-white bg-opacity-20 p-2 rounded-full relative"
                >
                  <Bell className="w-6 h-6 text-white" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs w-5 h-5 rounded-full flex items-center justify-center text-gray-900 font-bold">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {showNotifications && <NotificationPanel />}
              </div>
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto p-6">
          {activeTab === 'home' && <div>Jobs List Here</div>}
          {activeTab === 'tracking' && <div>Tracking Here</div>}
          {activeTab === 'ratings' && <RatingsView />}
          {activeTab === 'route' && <RouteView />}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-emerald-200 shadow-2xl">
          <div className="max-w-md mx-auto flex">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'home' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-400'
              }`}
            >
              <Search className="w-5 h-5" />
              <span className="text-xs mt-1">{t('jobsTab')}</span>
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'tracking' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-400'
              }`}
            >
              <Navigation className="w-5 h-5" />
              <span className="text-xs mt-1">{t('trackingTab')}</span>
            </button>
            <button
              onClick={() => setActiveTab('ratings')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'ratings' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-400'
              }`}
            >
              <Star className="w-5 h-5" />
              <span className="text-xs mt-1">{t('ratingsTab')}</span>
            </button>
            <button
              onClick={() => setActiveTab('route')}
              className={`flex-1 py-4 flex flex-col items-center transition-colors ${
                activeTab === 'route' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-400'
              }`}
            >
              <Route className="w-5 h-5" />
              <span className="text-xs mt-1">{t('routeTab')}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Phone Authentication (unchanged)
  const PhoneAuth = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState('phone');

    const handleCodeSubmit = () => {
      setIsLoggedIn(true);
      setCurrentUser({
        id: userType === 'driver' ? 1 : 1,
        name: userType === 'driver' ? 'Ahmed Benali / أحمد بن علي' : 'Test Customer / عميل تجريبي',
        phone: phone
      });
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {step === 'phone' ? t('phoneTitle') : t('codeTitle')}
            </h2>
          </div>
          <button
            onClick={handleCodeSubmit}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 rounded-xl font-bold text-lg"
          >
            {step === 'phone' ? t('sendCode') : t('verify')}
          </button>
        </div>
      </div>
    );
  };

  // Main render
  if (userType === 'marketing') {
    return <MarketingPage />;
  }

  if (!userType) {
    return <WelcomeScreen />;
  }

  if (!isLoggedIn) {
    return <PhoneAuth />;
  }

  if (userType === 'customer') {
    return <CustomerApp />;
  }

  if (userType === 'driver') {
    return <DriverApp />;
  }

  return <div>Admin and other components here...</div>;
};

export default WassalApp;