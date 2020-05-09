"""hospital URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from webapp.views import SearchPatientName, SearchPatientID, SearchDoctorName, SearchDoctorID, NonDeceased, Deceased, Edit, BillingEntry, AddPatient, GetDetails, Logout
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('spn/',SearchPatientName.as_view(), name = 'spn'),
    path('spi/',SearchPatientID.as_view(), name = 'spi'),
    path('sdn/',SearchDoctorName.as_view(), name = 'sdn'),
    path('sdi/',SearchDoctorID.as_view(), name = 'sdi'),
    path('nd/',NonDeceased.as_view(), name = 'nd'),
    path('d/',Deceased.as_view(), name = 'd'),
    path('e/',Edit.as_view(), name = 'e'),
    path('b/',BillingEntry.as_view(), name = 'b'),
    path('ap/',AddPatient.as_view(), name = 'ap'),
    path('gd/',GetDetails.as_view(), name = 'gd'),
    path('login/', views.obtain_auth_token, name='api-auth-token'),
    path('logout/', Logout.as_view(), name='logout'),
]
