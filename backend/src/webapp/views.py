from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

# from .serializers import UserSerializer, UserDataSerializerGet, UserDataSerializerInsert
from .models import User, Patient, Doctor, Billing, Released
from .serializers import PatientSerializer, DoctorSerializer

import datetime
import hashlib

class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class GetDetails(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        return Response(Patient.objects.count())


class SearchPatientName(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        if Patient.objects.filter(name=data["name"]):
        	qs = Patient.objects.filter(name=data["name"])
	        serializer = PatientSerializer(qs, many = True)
	        # print(serializer.data)
	        return Response(serializer.data)
        return Response({"name" : "Not Found"})

class SearchPatientID(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        if Patient.objects.filter(id=data["id"]):
        	qs = Patient.objects.filter(id=data["id"])
	        serializer = PatientSerializer(qs, many = True)
	        # print(serializer.data)
	        return Response(serializer.data)
        return Response({"name" : "Not Found"})

class SearchDoctorName(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        if Doctor.objects.filter(name=data["name"]):
        	qs = Doctor.objects.filter(name=data["name"])
	        serializer = DoctorSerializer(qs, many = True)
	        # print(serializer.data)
	        return Response(serializer.data)
        return Response({"name" : "Not Found"})

class SearchDoctorID(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        if Doctor.objects.filter(id=data["id"]):
        	qs = Doctor.objects.filter(id=data["id"])
	        serializer = DoctorSerializer(qs, many = True)
	        # print(serializer.data)
	        return Response(serializer.data)
        return Response({"name" : "Not Found"})

class NonDeceased(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        # id 
        ob1 = Patient.objects.filter(id=data["id"])[0]
        # previous
        ob2 = Released.objects.latest()
        '''
        {
			previous_block_hash, timestamp, current_hash, name, address, contact, bed, doctor, emergency, deceased, billings
        }
        '''
        ob3 = Billing.objects.filter(owner = ob1)
        s = ""
        for x in ob3:
        	s + str(x) + ","
        s = s[:-1]
        previous_block_hash = ob2.current_hash
        timestamp = datetime.datetime.now()
        headers = previous_block_hash + str(timestamp) + ob1.name + ob1.address + ob1.contact + str(ob1.bed) + str(ob1.doctor) + ob1.emergency + 'n' + s
        current_hash = hashlib.sha256(hashlib.sha256(headers.encode()).hexdigest().encode()).hexdigest()
        ob = Released.objects.create(previous_block_hash=ob2.current_hash,timestamp=timestamp,current_hash=current_hash,name=ob1.name,address=ob1.address,contact=ob1.contact,bed=ob1.bed,doctor=str(ob1.doctor),emergency=ob1.emergency,deceased='n',billings=s)
        ob3.delete()
        ob1.delete()
        return Response({"name" : "save"})



class Deceased(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        # id 
        ob1 = Patient.objects.filter(id=data["id"])[0]
        # previous
        ob2 = Released.objects.latest()
        '''
        {
			previous_block_hash, timestamp, current_hash, name, address, contact, bed, doctor, emergency, deceased, billings
        }
        '''
        ob3 = Billing.objects.filter(owner = ob1)
        s = ""
        for x in ob3:
        	s + str(x) + ","
        s = s[:-1]
        previous_block_hash = ob2.current_hash
        timestamp = datetime.datetime.now()
        headers = previous_block_hash + str(timestamp) + ob1.name + ob1.address + ob1.contact + str(ob1.bed) + str(ob1.doctor) + ob1.emergency + 'y' + s
        current_hash = hashlib.sha256(hashlib.sha256(headers.encode()).hexdigest().encode()).hexdigest()
        ob = Released.objects.create(previous_block_hash=ob2.current_hash,timestamp=timestamp,current_hash=current_hash,name=ob1.name,address=ob1.address,contact=ob1.contact,bed=ob1.bed,doctor=str(ob1.doctor),emergency=ob1.emergency,deceased='y',billings=s)
        ob3.delete()
        ob1.delete()
        return Response({"name" : "save"})

class Edit(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        '''
        {
			id, name, address, contact, bed, doctor, emergency
        }
        '''
        ob = Patient.objects.filter(id=request.data["id"]).update(
        		name = request.data["name"],
        		address = request.data["address"],
        		contact = request.data["contact"],
        		bed = request.data["bed"],
        		emergency = request.data["emergency"],
        		doctor = Doctor.objects.filter(id=request.data["doctor"])
        	)
        ob.save()
        return Response({"name" : "saved"})


class BillingEntry(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        '''
        {
			name, address, details, amount, owner
        }
        '''
        ob = Patient.objects.create(
        		name = request.data["name"],
        		address = request.data["address"],
        		details = request.data["details"],
        		amount = request.data["amount"],
        		owner = Patient.objects.filter(id=request.data["owner"])
        	)
        ob.save()
        return Response({"name" : "saved"})


class AddPatient(APIView):
    # permission_classes = (IsAuthenticated,)
    def post(self, request, *args, **kwargs):
        data=request.data
        '''
        {
			name, address, contact, bed, doctor, emergency
        }
        '''
        ob = Patient.objects.create(
        		name = request.data["name"],
        		address = request.data["address"],
        		contact = request.data["contact"],
        		bed = request.data["bed"],
        		emergency = request.data["emergency"],
        		doctor = Doctor.objects.filter(id=request.data["doctor"])
        	)
        ob.save()
        return Response({"name" : "saved"})

# header_bin = (str(self.previous_block_hash) +
#                       str(self.data) +
#                       str(self.timestamp))

# inner_hash = hashlib.sha256(header_bin.encode()).hexdigest().encode()
# outer_hash = hashlib.sha256(inner_hash).hexdigest()
# timestamp = datetime.datetime.now()
# current_hash = hashlib.sha256(hashlib.sha256(str(timestamp).encode()).hexdigest().encode()).hexdigest()
# ob = Released.objects.create(previous_block_hash='0', timestamp=timestamp, current_hash=current_hash, name='0', address='0', contact='0', bed=0, doctor='0', emergency='0', deceased='0', billings='0')